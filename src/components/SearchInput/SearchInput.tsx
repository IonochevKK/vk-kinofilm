import React, { useState, useEffect, useRef } from "react";
import "./searchInput.scss";
import SearchSvg from "../../../public/svg/search.svg?react";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import Button from "../UI KIT/Button/Button";
import CloseSvg from "../../../public/svg/close.svg?react";
import ListSearch from "./ListSearch/ListSearch";
import { useGetFilmsTop10Query } from "../../redux/filmsApi";
import { BackDropFilm, RatingFilm } from "../../types/interface";

interface ResultItem {
  id: string;
  name: string;
  alternativeName: string;
  backdrop: BackDropFilm;
  description?: string;
  rating?: RatingFilm;
  year: string;
}

interface SearchInputProps {
  open: (state: boolean) => void;
  isSearchOpen: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ open, isSearchOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data } = useGetFilmsTop10Query({});
  const screenTablet = useResizeWidth(700);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term && data) {
      const filteredResults = data.docs.filter((item: ResultItem) => {
        if (item?.name === null) {
          return item.alternativeName
            .toLowerCase()
            .includes(term.toLowerCase());
        } else {
          return item?.name.toLowerCase().includes(term.toLowerCase());
        }
      });
      setResults(filteredResults);
    } else if (data && data.docs) {
      setResults(data.docs);
    } else {
      setResults([]);
    }
  };

  const toggleSearch = () => {
    open(!isSearchOpen);
    if (!isSearchOpen && data && data.docs) {
      setResults(data.docs);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSearchTerm("");
        setResults([]);
        open(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [data, open]);

  return (
    <div ref={containerRef} className="search-input-container">
      <div className="input-container">
        {!screenTablet || isSearchOpen ? (
          <input
            ref={inputRef}
            type="text"
            placeholder="Фильмы, сериалы, персоны"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        ) : null}
        <div className="svg">
          <Button type="link" onClick={toggleSearch} disabled={!screenTablet}>
            {isSearchOpen ? <CloseSvg /> : <SearchSvg />}
          </Button>
        </div>
      </div>
      {!screenTablet && (
        <>
          {results.length > 0 && (
            <div className="results-list">
              {results.map((film) => (
                <div className="listcard" key={film.id}>
                  <ListSearch
                    id={film.id}
                    name={film?.name}
                    alternativeName={film?.alternativeName}
                    backdrop={film.backdrop}
                    description={film.description}
                    rating={film.rating}
                    year={film.year}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {screenTablet && (
        <>
          {results.length > 0 && isSearchOpen && (
            <div className="results-list">
              {results.map((film) => (
                <div className="listcard" key={film.id}>
                  <ListSearch
                    id={film.id}
                    name={film?.name}
                    alternativeName={film?.alternativeName}
                    backdrop={film.backdrop}
                    description={film.description}
                    rating={film.rating}
                    year={film.year}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchInput;

import React, { useState } from "react";
import "./searchInput.scss";
import SearchSvg from "../../../public/svg/search.svg?react";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import Button from "../UI KIT/Button/Button";
interface ResultItem {
  title: string;
  rating: number;
  year: string;
  link: string;
  price?: number;
}

const mockData: ResultItem[] = [
  {
    title: "Беспринципные",
    rating: 7.7,
    year: "2020 - ...",
    link: "#",
    price: 0,
  },
  { title: "На автомате", rating: 7.3, year: "2024 - ...", link: "#" },
  { title: "Золотое дно", rating: 8.0, year: "2024", link: "#" },
  {
    title: "Министерство неж gentlemanских дел",
    rating: 7.3,
    year: "2024",
    link: "#",
    price: 399,
  },
  { title: "Материнский инстинкт", rating: 7.1, year: "2024", link: "#" },
  { title: "Майор Гром: Чумной Доктор", rating: 7.2, year: "2021", link: "#" },
];
interface SearchInputProps {
  open: (state: boolean) => void;
  isSearchOpen: boolean;
}
const SearchInput: React.FC<SearchInputProps> = ({ open, isSearchOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ResultItem[]>([]);

  const screenTablet = useResizeWidth(700);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const filteredResults = mockData.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const toggleSearch = () => {
    open(!isSearchOpen);
  };
  return (
    <div className="search-input-container">
      <div className="input-container">
        {!screenTablet || isSearchOpen ? (
          <input
            type="text"
            placeholder="Фильмы, сериалы, персоны"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        ) : null}
        <div className="svg">
          <Button type="link" onClick={toggleSearch} disabled={!screenTablet}>
            <SearchSvg />
          </Button>
        </div>
      </div>
      {results.length > 0 && (
        <div className="results-list">
          {results.map((item, index) => (
            <div key={index} className="result-item">
              <div className="result-title">{item.title}</div>
              <div className="result-rating">{item.rating}</div>
              <div className="result-year">{item.year}</div>
              <a href={item.link} className="result-link">
                Смотреть
              </a>
              {item.price !== undefined && (
                <div className="result-price">{item.price} ₽</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

import React, { useRef, useState, useEffect } from "react";
import "./header.scss";
import BurgerSvg from "../../../public/svg/burger.svg?react";
import CloseSvg from "../../../public/svg/close.svg?react";
import LogoImg from "../../../public/svg/logo.svg?react";
import Button from "../UI KIT/Button/Button";
import Text from "../UI KIT/Text/Text";
import SearchInput from "../SearchInput/SearchInput";
import { useResizeWidth } from "../../hooks/useResizeWidth";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = useRef<HTMLElement>(null);
  const screenTablet = useResizeWidth(800);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const toggleDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpenDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {!isSearchOpen && (
          <nav ref={navRef}>
            <div className="menu-item">
              <div className="burger">
                <Button type="link" onClick={toggleDropDown}>
                  {isOpenDropDown ? <CloseSvg /> : <BurgerSvg />}
                </Button>
              </div>
              <div className="logo">
                <Button type="link" onClick={toggleDropDown}>
                  <LogoImg />
                </Button>
              </div>
              {isOpenDropDown && (
                <div
                  className={`dropdown-menu ${
                    isOpenDropDown ? "dropdown-block" : ""
                  }`}
                >
                  <div className="dropdown-menu-item">
                    <Link to="/lists/categories/movies/1">
                      <Text body4_bold>Фильмы</Text>
                    </Link>
                  </div>
                  <div className="dropdown-menu-item">
                    <Link to="/lists/categories/movies/1">
                      <Text body4_bold>Категории</Text>
                    </Link>
                  </div>
                  <div className="dropdown-menu-item">
                    <Link to="/lists/categories/movies/3">
                      <Text body4_bold>Сериалы</Text>
                    </Link>
                  </div>
                  {screenTablet && (
                    <div className="dropdown-menu-item">
                      <Text body4_bold>Избранное</Text>
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>
        )}
        <div className="search">
          <SearchInput open={setIsSearchOpen} isSearchOpen={isSearchOpen} />
        </div>
        {!screenTablet && (
          <div className="features">
            <Button type="secondary_1">
              <Text body4_bold color="white">
                Избранное
              </Text>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

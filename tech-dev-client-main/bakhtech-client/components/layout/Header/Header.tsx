import type { NextPage } from "next";
import styles from "./Header.module.scss";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Menu from "../Menu/Menu";
import Dropdown from "./Dropdown/Dropdown";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import Search from "./Search/Search";
import Link from "next/link";

interface Props {
  isMainPage: Boolean;
}
const Header: NextPage<Props> = ({ isMainPage }) => {
  //states
  const [scrolled, setScrolled] = useState(false);
  const [menuMode, setMenuMode] = useState(false);
  const [dropdownMode, setDropdownMode] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  //classnames
  const header = classNames(styles.header, {
    [styles["header-scrolled"]]: scrolled,
    [styles["header-main-page"]]: isMainPage,
  });
  const middle = classNames(styles["header-middle"], {
    [styles["header-middle-scrolled"]]: scrolled,
  });
  const right = classNames(styles["header-right"], {
    [styles["header-right-scrolled"]]: scrolled,
  });

  //functions
  const handleMenuFunction = () => {
    setMenuMode(!menuMode);
  };

  const handleDropdownOpen = () => {
    setDropdownMode(!dropdownMode);
  };

  const handleDropdownLeave = () => {
    setDropdownMode(!dropdownMode);
  };

  const handleSearch = () => {
    setSearchMode(!searchMode);
  };

  //effect hook
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={header}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className={styles["header-menu"]} onClick={handleMenuFunction}>
              {menuMode ? <AiOutlineClose /> : <FiMenu />}
            </div>
            <div className={styles["header-left"]}>
              <h1>
                <Link href={"/"}>Bakhtech</Link>
              </h1>
            </div>
            <div className={middle}>
              <ul className={`${styles.menu} d-flex`}>
                <li>
                  <a className={styles.menuitem}>Home</a>
                </li>
                <li
                  onMouseLeave={handleDropdownLeave}
                  onMouseEnter={handleDropdownOpen}
                  className={`${styles.withdropdown}`}
                >
                  <a className={styles.menuitem}>Services</a>
                  {dropdownMode ? (
                    <MdKeyboardArrowRight className={styles.arrow} />
                  ) : (
                    <MdKeyboardArrowDown className={styles.arrow} />
                  )}
                  <Dropdown dropdownMode={dropdownMode} />
                </li>
                <li>
                  <Link href={"/contact"}>
                    <a className={styles.menuitem}>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={right}>
              <ul className={`${styles.icons} d-flex`}>
                <li className={styles.search}>
                  <BiSearch onClick={handleSearch} />
                  <Search searchMode={searchMode} />
                </li>
                {/* <li>Menu</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Menu menuMode={menuMode} setMenuMode={setMenuMode} />
    </>
  );
};
export default Header;

import type { NextPage } from "next";
import styles from "./Menu.module.scss";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames";
import SubMenu from "./SubMenu";
import Link from "next/link";

interface Props {
  menuMode: boolean;
  setMenuMode: Dispatch<SetStateAction<boolean>>;
}

const Menu: NextPage<Props> = ({ menuMode, setMenuMode }) => {
  //states
  const [subMenuMode, setSubMenuMode] = useState(false);

  //classnames
  const menu = classNames(styles.menu, {
    [styles["menu-state"]]: menuMode,
  });

  //functions
  const handleSubMenu = (state: boolean) => {
    setSubMenuMode(state);
  };

  return (
    <div className={menu}>
      <div className="container">
        <ul>
          <li onClick={() => setMenuMode(false)}>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <a>Services</a>
            {subMenuMode ? (
              <MdKeyboardArrowDown onClick={() => handleSubMenu(false)} />
            ) : (
              <MdKeyboardArrowRight onClick={() => handleSubMenu(true)} />
            )}
          </li>
          {subMenuMode && (
            <li className={styles["submenu-list"]}>
              <SubMenu subMenuMode={subMenuMode} />
            </li>
          )}
          <li onClick={() => setMenuMode(false)}>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

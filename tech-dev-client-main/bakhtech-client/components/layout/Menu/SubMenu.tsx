import type { NextPage } from "next";
import styles from "./Menu.module.scss";
import classNames from "classnames";

interface Props {
  subMenuMode: boolean;
}

const SubMenu: NextPage<Props> = ({ subMenuMode }) => {
  //classnames
  const menu = classNames(styles.submenu, {
    [styles["sub-menu-state"]]: subMenuMode,
  });

  return (
    <div className={menu}>
      <div className="container">
        <ul>
          <li>
            <a>Cloud Engineering</a>
          </li>
          <li>
            <a>Software Engineering</a>
          </li>
          <li>
            <a>Data Mining</a>
          </li>
          <li>
            <a>Help Desk</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;

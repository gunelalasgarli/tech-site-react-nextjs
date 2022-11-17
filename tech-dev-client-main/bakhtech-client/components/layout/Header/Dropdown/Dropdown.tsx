import type { NextPage } from "next";
import styles from "./Dropdown.module.scss";
import classNames from "classnames";

interface Props {
  dropdownMode: boolean;
}

const Dropdown: NextPage<Props> = ({ dropdownMode }) => {
  //classnames
  const dropdown = classNames(styles.dropdown, {
    [styles["dropdown-state"]]: dropdownMode,
  });

  return (
    <div className={dropdown}>
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
  );
};

export default Dropdown;

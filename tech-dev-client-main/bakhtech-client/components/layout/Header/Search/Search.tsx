import type { NextPage } from "next";
import styles from "./Search.module.scss";
import classNames from "classnames";
import { BiSearch } from "react-icons/bi";

interface Props {
  searchMode: boolean;
}

const Search: NextPage<Props> = ({ searchMode }) => {
  //classnames
  const search = classNames(styles.search, {
    [styles["search-state"]]: searchMode,
  });

  return (
    <div className={search}>
      <form>
        <input type="text" />
        <button>
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
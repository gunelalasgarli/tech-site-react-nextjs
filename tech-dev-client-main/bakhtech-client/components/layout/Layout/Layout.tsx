import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}
const Layout: NextPage<Props> = ({ children }) => {
  const [isMainPage, setMainPage] = useState(false);
  let router = useRouter();
  useEffect(() => {
    router.pathname !== "/" ? setMainPage(true) : setMainPage(false);
  });
  return (
    <>
      <Header isMainPage={isMainPage} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

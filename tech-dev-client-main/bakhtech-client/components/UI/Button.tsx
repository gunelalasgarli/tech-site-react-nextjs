import type { NextPage } from "next";
import styles from "./Button.module.scss";

interface Props {
  style: string;
  content: React.ReactNode;
}
const Button: NextPage<Props> = ({ style, content }) => {
  return <button className={`${styles.button} ${style} `}>{content}</button>;
};

export default Button;
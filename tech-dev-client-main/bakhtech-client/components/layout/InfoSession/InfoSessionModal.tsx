import type { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import { FaInfo } from "react-icons/fa";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal/Modal";
import styles from "./InfoSession.module.scss";

interface Props {
  children?: React.ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const InfoSessionModal: NextPage<Props> = ({ open, setOpen }) => {
  //const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className={styles["wrap-icon"]}>
        <FaInfo />
      </div>
      <div className={styles.content}>
        <h4>Cloud Engineering</h4>
        <p>
          Informative session for nerds who want to learn cloud engineering.
          Press button for completing a from and you will receive an email for
          session link.
        </p>
        <Button style={styles.button} content={"Submit"} />
      </div>
    </Modal>
  );
};

export default InfoSessionModal;

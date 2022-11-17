import type { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Modal.module.scss";
import ModalPortal from "./ModalPortal";

interface Props {
  children?: React.ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Modal: NextPage<Props> = ({ children, open, setOpen }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    console.log('salam');
    if (open) {
      document.body.classList.add("modal-active");
    }
    return () => {
      body?.classList.remove("modal-active");
    };
  }, [open]);
  return (
    <>
      {open && (
        <ModalPortal selector="#modal">
          <div className={styles.backdrop}>
            <div className={styles.modal}>
              <AiOutlineClose
                onClick={() => setOpen(false)}
                className={styles.close}
              />
              <div role="document">
                <div className={styles["modal-content"]}>
                  <div className={styles["modal-body"]}>{children}</div>
                </div>
              </div>
            </div>
          </div>
          {/* <button type="button" onClick={() => setOpen(false)}>
            Close Modal
          </button> */}
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;

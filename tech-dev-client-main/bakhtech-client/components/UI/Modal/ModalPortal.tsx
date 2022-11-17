import { NextPage } from "next";
import { useRef, useEffect, useState, ReactElement } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  selector: string;
}

const ModalPortal: NextPage<Props> = ({ children, selector }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [selector]);

  return mounted
    ? createPortal(children, document.querySelector(selector) as Element)
    : null;
};

export default ModalPortal

import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface ModalProp
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  section: keyof JSX.IntrinsicElements;
  id: string;
  className: string;
}

const Modal: React.FC<ModalProp> = (props) => {
  const { section, id, className, children, ...rest } = props;
  const el = document.createElement(section);
  let modalRef: RefObject<HTMLElement> = useRef(el);
  //   const [mount, setMount] = useState(false);
  useEffect(() => {
    // setMount(true);
    const current = modalRef.current as HTMLElement;
    if (!current) return;
    current?.setAttribute("id", id);
    current?.setAttribute("class", className);

    Object.keys(rest).forEach((attribute) => {
      const val: keyof typeof rest = rest[attribute as keyof typeof rest];
      current.setAttribute(attribute, val);
    });
    document.body.appendChild(current);
    // console.log(mount);

    return () => {
      document.body.removeChild(current);
    };
  }, [modalRef, id, className]);

  if (!modalRef.current) {
    return <>{null}</>;
  }
  return createPortal(children, modalRef.current);
};

Modal.defaultProps = {
  section: "section",
};

export default Modal;

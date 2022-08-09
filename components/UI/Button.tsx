import React, { ReactNode } from "react";
import styles from "../../styles/Button.module.css";

type ButtonProps = {
  children: ReactNode;
  type: "Primary" | "Secondary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, type, onClick }: ButtonProps) => {
  const typeCheck = type === "Primary" ? styles.pry : styles.sec;
  return (
    <button onClick={onClick} className={styles.btn + " " + typeCheck}>
      {children}
    </button>
  );
};

export default Button;

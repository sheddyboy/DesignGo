import React, { HTMLAttributes } from "react";
import styles from "../../styles/Card.module.css";

interface CardProp extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}
const Card = ({ children, className, ...attributes }: CardProp) => {
  return (
    <div {...attributes} className={styles.card + " " + className}>
      {children}
    </div>
  );
};

export default Card;

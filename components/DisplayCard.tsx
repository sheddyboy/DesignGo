import Image from "next/image";
import React, { HTMLAttributes } from "react";
import styles from "../styles/DisplayCard.module.css";
import Card from "./UI/Card";

export interface DisplayCardProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  summary: string;
}

const DisplayCard = ({
  title,
  summary,
  imageUrl,
  className,
  ...attributes
}: DisplayCardProps) => {
  return (
    <Card className={className + " " + styles.displayCard} {...attributes}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* <Image alt="" src={imageUrl} width={350} height={320} /> */}
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </Card>
  );
};

export default DisplayCard;

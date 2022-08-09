import Image from "next/image";
import React from "react";
import styles from "../styles/DisplayCard.module.css";
import { PageHeadingProps } from "./PageHeading";
import Card from "./UI/Card";

interface DisplayCardProps extends PageHeadingProps {
  imageUrl: string;
}

const DisplayCard = ({ title, summary, imageUrl }: DisplayCardProps) => {
  return (
    <Card className={styles.displayCard}>
      <div className={styles.image}>
        <Image src={imageUrl} width={350} height={320} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </Card>
  );
};

export default DisplayCard;

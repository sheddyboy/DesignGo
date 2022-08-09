import Image from "next/image";
import React from "react";
import styles from "../styles/PageHeading.module.css";
import Card from "./UI/Card";

export interface PageHeadingProps {
  title: string;
  summary: string;
}

const PageHeading = ({ title, summary }: PageHeadingProps) => {
  return (
    <Card className={styles.pageHeading}>
      <h1>{title}</h1>
      <p>{summary}</p>
      <div className={styles.pattern}>
        <Image src={"/bg-pattern-intro-app.svg"} width={876} height={584} />
      </div>
    </Card>
  );
};

export default PageHeading;

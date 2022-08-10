import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/PageHeading.module.css";
import { DisplayCardProps } from "./DisplayCard";
import Card from "./UI/Card";

export interface PageHeadingProps extends DisplayCardProps {}

const PageHeading = ({ title, summary }: PageHeadingProps) => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  let headingPatternChange: string;
  let width: number;
  let height: number;

  if (windowWidth <= 600) {
    headingPatternChange = "/bg-pattern-hero-about-desktop.svg";
    width = 292;
    height = 292;
  } else {
    headingPatternChange = "/bg-pattern-intro-app.svg";
    width = 876;
    height = 584;
  }
  return (
    <div className={styles.section}>
      <Card className={styles.pageHeading + " container"}>
        <h1>{title}</h1>
        <p>{summary}</p>
        <div className={styles.pattern}>
          <Image
            alt=""
            src={headingPatternChange}
            width={width}
            height={height}
          />
        </div>
      </Card>
    </div>
  );
};

export default PageHeading;

PageHeading.defaultProps = {
  imageUrl: "",
};

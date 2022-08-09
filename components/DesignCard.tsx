import Link from "next/link";
import React from "react";
import Card from "./UI/Card";
import styles from "../styles/DesignCard.module.css";
import Image from "next/image";

type DesignCardProps = {
  imageUrl: string;
  className?: string;
  title: string;
  path: string;
  height?: string;
};

const DesignCard = ({
  title,
  path,
  imageUrl,
  className,
  height,
}: DesignCardProps) => {
  return (
    <Card
      className={className + " " + styles.gridItem}
      style={{ backgroundImage: `url(${imageUrl})`, height: height }}
    >
      <Link href={path}>
        <div className={styles.overlay}>
          <div>
            <h1>{title}</h1>
            <p>
              {"VIEW PROJECTS"}{" "}
              <i>
                <Image src={"/icon-right-arrow.svg"} width={4} height={8} />
              </i>
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default DesignCard;

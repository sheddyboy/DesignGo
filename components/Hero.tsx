import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Hero.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const Hero = () => {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className="container">
        <Card className={styles.hero}>
          <div className={styles.content}>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Button
              onClick={() => {
                router.push("/about-us");
              }}
              type="Primary"
            >
              Learn More
            </Button>
          </div>
          <div className={styles.image}>
            <Image
              alt=""
              src={"/image-hero-phone.png"}
              width={624}
              height={913}
            />
          </div>
          <div className={styles.heroPattern}>
            <Image
              alt=""
              src={"/bg-pattern-hero-home.svg"}
              width={640}
              height={640}
            />
          </div>
        </Card>
      </div>
      <div className={styles.leafPattern}>
        <Image alt="" src={"/bg-pattern-leaf.svg"} width={1006} height={594} />
      </div>
    </main>
  );
};

export default Hero;

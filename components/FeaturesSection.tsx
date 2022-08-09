import Image from "next/image";
import React from "react";
import styles from "../styles/FeaturesSection.module.css";
import Grid from "./UI/Grid";

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Grid
          className={styles.grid}
          gridTemplateColumns="1fr 1fr 1fr"
          columnGap="30px"
        >
          <div className={styles.gridItem}>
            <div className={styles.image}>
              <Image
                src={"/illustration-passionate.svg"}
                width={202}
                height={202}
              />
            </div>
            <div className={styles.content}>
              <h3>PASSIONATE</h3>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
            <div className={styles.pattern}>
              <Image
                src={"/bg-pattern-hero-home.svg"}
                width={202}
                height={202}
              />
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.image}>
              <Image
                src={"/illustration-resourceful.svg"}
                width={202}
                height={202}
              />
            </div>
            <div className={styles.content}>
              <h3>RESOURCEFUL</h3>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
            <div className={styles.pattern}>
              <Image
                src={"/bg-pattern-hero-home.svg"}
                width={202}
                height={202}
              />
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.image}>
              <Image
                src={"/illustration-friendly.svg"}
                width={202}
                height={202}
              />
            </div>
            <div className={styles.content}>
              <h3>FRIENDLY</h3>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
            <div className={styles.pattern}>
              <Image
                src={"/bg-pattern-hero-home.svg"}
                width={202}
                height={202}
              />
            </div>
          </div>
        </Grid>
      </div>
      <div className={styles.leafPattern}>
        <Image src={"/bg-pattern-leaf.svg"} width={1006} height={594} />
      </div>
    </section>
  );
};

export default FeaturesSection;

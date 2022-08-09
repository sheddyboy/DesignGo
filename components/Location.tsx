import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Location.module.css";
import Button from "./UI/Button";
import Grid from "./UI/Grid";

const Location = () => {
  const router = useRouter();

  return (
    <Grid
      className={styles.location}
      gridTemplateColumns="1fr 1fr 1fr"
      columnGap="30px"
    >
      <div className={styles.gridItem}>
        <Image src="/illustration-canada.svg" width={202} height={202} />
        <h3>CANADA</h3>
        <Button
          type="Secondary"
          onClick={() => {
            router.push("/locations");
          }}
        >
          SEE LOCATION
        </Button>
        <div className={styles.pattern}>
          <Image
            src="/bg-pattern-hero-about-desktop.svg"
            width={202}
            height={202}
          />
        </div>
      </div>
      <div className={styles.gridItem}>
        <Image src="/illustration-australia.svg" width={202} height={202} />
        <h3>AUSTRALIA</h3>
        <Button
          type="Secondary"
          onClick={() => {
            router.push("/locations");
          }}
        >
          SEE LOCATION
        </Button>
        <div className={styles.pattern}>
          <Image
            src="/bg-pattern-hero-about-desktop.svg"
            width={202}
            height={202}
          />
        </div>
      </div>
      <div className={styles.gridItem}>
        <Image
          src="/illustration-united-kingdom.svg"
          width={202}
          height={202}
        />
        <h3>UNITED KINGDOM</h3>
        <Button
          type="Secondary"
          onClick={() => {
            router.push("/locations");
          }}
        >
          SEE LOCATION
        </Button>
        <div className={styles.pattern}>
          <Image
            src="/bg-pattern-hero-about-desktop.svg"
            width={202}
            height={202}
          />
        </div>
      </div>
    </Grid>
  );
};

export default Location;

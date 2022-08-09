import Image from "next/image";
import React from "react";
import Card from "../components/UI/Card";
import Grid from "../components/UI/Grid";
import styles from "../styles/LocationPage.module.css";

const LocationPage = () => {
  return (
    <section className={styles.section}>
      <div className=" container">
        <Grid
          className={styles.canada}
          gridTemplateColumns="2fr 1fr"
          columnGap="30px"
        >
          <Card className={styles.content}>
            <h1>Canada</h1>
            <div className={styles.wrapper}>
              <p>
                <strong>Designo Central Office</strong>
                <br /> 3886 Wellington
                <br />
                StreetToronto, Ontario M9C 3J5
              </p>
              <p>
                <strong>Contact</strong> <br />P : +1 253-863-8967 <br />M :
                contact@designo.co
              </p>
            </div>
            <div className={styles.pattern}>
              <Image
                src="/bg-pattern-two-circles.svg"
                width={584}
                height={292}
              />
            </div>
          </Card>
          <Card className={styles.image}>
            <Image src="/image-map-canada.png" width={350} height={326} />
          </Card>
        </Grid>
        <Grid
          className={styles.australia}
          gridTemplateColumns="1fr 2fr"
          columnGap="30px"
        >
          <Card className={styles.image}>
            <Image src="/image-map-australia.png" width={350} height={326} />
          </Card>
          <Card className={styles.content}>
            <h1>Australia</h1>
            <div className={styles.wrapper}>
              <p>
                <strong>Designo Central Office</strong>
                <br /> 3886 Wellington
                <br />
                StreetToronto, Ontario M9C 3J5
              </p>
              <p>
                <strong>Contact</strong> <br />P : +1 253-863-8967 <br />M :
                contact@designo.co
              </p>
            </div>
            <div className={styles.pattern}>
              <Image
                src="/bg-pattern-two-circles.svg"
                width={584}
                height={292}
              />
            </div>
          </Card>
        </Grid>
        <Grid
          className={styles.uk}
          gridTemplateColumns="2fr 1fr"
          columnGap="30px"
        >
          <Card className={styles.content}>
            <h1>United Kingdom</h1>
            <div className={styles.wrapper}>
              <p>
                <strong>Designo Central Office</strong>
                <br /> 3886 Wellington
                <br />
                StreetToronto, Ontario M9C 3J5
              </p>
              <p>
                <strong>Contact</strong> <br />P : +1 253-863-8967 <br />M :
                contact@designo.co
              </p>
            </div>
            <div className={styles.pattern}>
              <Image
                src="/bg-pattern-two-circles.svg"
                width={584}
                height={292}
              />
            </div>
          </Card>
          <Card className={styles.image}>
            <Image
              src="/image-map-united-kingdom.png"
              width={350}
              height={326}
            />
          </Card>
        </Grid>
      </div>
    </section>
  );
};

export default LocationPage;

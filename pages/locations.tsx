import Image from "next/image";
import React from "react";
import Card from "../components/UI/Card";
import Grid from "../components/UI/Grid";
import useGetWindowWidth from "../Hooks/useGetWindowWidth";
import styles from "../styles/LocationPage.module.css";

const LocationPage = () => {
  const { windowWidth } = useGetWindowWidth();

  let canadaImage: string;
  let australiaImage: string;
  let ukImage: string;
  if (windowWidth <= 1000) {
    canadaImage = "/image-map-canada-tablet.png";
    australiaImage = "/image-map-australia-tablet.png";
    ukImage = "/image-map-uk-tablet.png";
  } else {
    canadaImage = "/image-map-canada.png";
    australiaImage = "/image-map-australia.png";
    ukImage = "/image-map-united-kingdom.png";
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
                alt=""
                src="/bg-pattern-two-circles.svg"
                width={584}
                height={292}
              />
            </div>
          </Card>
          <Card
            className={styles.image}
            style={{
              backgroundImage: `url(${canadaImage})`,
            }}
          ></Card>
        </Grid>
        <Grid
          className={styles.australia}
          gridTemplateColumns="1fr 2fr"
          columnGap="30px"
        >
          <Card
            className={styles.image}
            style={{
              backgroundImage: `url(${australiaImage})`,
            }}
          ></Card>
          <Card className={styles.content}>
            <h1>Australia</h1>
            <div className={styles.wrapper}>
              <p>
                <strong>Designo AU Office</strong>
                <br /> 19 Balonne Street
                <br />
                New South Wales 2443
              </p>
              <p>
                <strong>Contact</strong> <br />P : (02) 6720 9092 <br />M :
                contact@designo.au
              </p>
            </div>
            <div className={styles.pattern}>
              <Image
                alt=""
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
                <strong>Designo UK Office</strong>
                <br /> 13 Colorado Way
                <br />
                Rhyd-y-fro SA8 9GA
              </p>
              <p>
                <strong>Contact</strong> <br />P : 078 3115 1400 <br />M :
                contact@designo.uk
              </p>
            </div>
            <div className={styles.pattern}>
              <Image
                alt=""
                src="/bg-pattern-two-circles.svg"
                width={584}
                height={292}
              />
            </div>
          </Card>
          <Card
            className={styles.image}
            style={{
              backgroundImage: `url(${ukImage})`,
            }}
          ></Card>
        </Grid>
      </div>
    </section>
  );
};

export default LocationPage;

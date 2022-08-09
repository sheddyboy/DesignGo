import Image from "next/image";
import React from "react";
import DesignCard from "../components/DesignCard";
import DisplayCard from "../components/DisplayCard";
import PageHeading from "../components/PageHeading";
import Grid from "../components/UI/Grid";
import styles from "../styles/WebDesignPage.module.css";

const WebDesignPage = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <PageHeading
          title="Web Design"
          summary="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />
        <Grid
          className={styles.grid}
          gridTemplateColumns="1fr 1fr 1fr"
          columnGap="30px"
          rowGap="32px"
        >
          <DisplayCard
            title="EXPRESS"
            summary="A multi-carrier shipping website for ecommerce businesses"
            imageUrl="/image-express.jpg"
          />
          <DisplayCard
            title="TRANSFER"
            summary="Site for low-cost money transfers and sending money within seconds"
            imageUrl="/image-transfer.jpg"
          />
          <DisplayCard
            title="PHOTON"
            summary="A state-of-the-art music player with high-resolution audio and DSP effects"
            imageUrl="/image-photon.jpg"
          />
          <DisplayCard
            title="BUILDER"
            summary="Connects users with local contractors based on their location"
            imageUrl="/image-builder.jpg"
          />
          <DisplayCard
            title="BLOGR"
            summary="Blogr is a platform for creating an online blog or publication"
            imageUrl="/image-blogr.jpg"
          />
          <DisplayCard
            title="CAMP"
            summary="Get expert training in coding, data, design, and digital marketing"
            imageUrl="/image-camp.jpg"
          />
        </Grid>
        <Grid
          className={styles.grid2}
          gridTemplateColumns="1fr 1fr"
          columnGap="30px"
        >
          <DesignCard
            title="APP DESIGN"
            imageUrl="image-app-design.jpg"
            path="/app-design"
            height="308px"
          />
          <DesignCard
            title="GRAPHIC DESIGN"
            imageUrl="image-graphic-design.jpg"
            path="/graphic-design"
          />
        </Grid>
      </div>
      <div className={styles.leafPattern}>
        <Image alt="" src={"/bg-pattern-leaf.svg"} width={1006} height={594} />
      </div>
    </section>
  );
};

export default WebDesignPage;

import Image from "next/image";
import React from "react";
import DesignCard from "../components/DesignCard";
import DisplayCard from "../components/DisplayCard";
import PageHeading from "../components/PageHeading";
import Grid from "../components/UI/Grid";
import styles from "../styles/GraphicDesignPage.module.css";

const GraphicDesignPage = () => {
  return (
    <section className={styles.section}>
      <PageHeading
        title="Graphic Design"
        summary="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <div className="container">
        <Grid
          className={styles.grid}
          gridTemplateColumns="1fr 1fr 1fr"
          columnGap="30px"
          rowGap="32px"
        >
          <DisplayCard
            className={styles.gridItem}
            title="TIM BROWN"
            summary="A book cover designed for Tim Brown’s new release, ‘Change’"
            imageUrl="/image-change.jpg"
          />
          <DisplayCard
            className={styles.gridItem}
            title="BOXED WATER"
            summary="A simple packaging concept made for Boxed Water"
            imageUrl="/image-boxed-water.jpg"
          />
          <DisplayCard
            className={styles.gridItem}
            title="SCIENCE!"
            summary="A poster made in collaboration with the Federal Art Project"
            imageUrl="/image-science.jpg"
          />
        </Grid>
        <Grid
          className={styles.grid2}
          gridTemplateColumns="1fr 1fr"
          columnGap="30px"
        >
          <DesignCard
            className={styles.grid2Item}
            title="APP DESIGN"
            imageUrl="image-app-design.jpg"
            path="/app-design"
            height="308px"
          />
          <DesignCard
            title="WEB DESIGN"
            imageUrl="image-web-design-small.jpg"
            path="/web-design"
          />
        </Grid>
      </div>
      <div className={styles.leafPattern}>
        <Image alt="" src={"/bg-pattern-leaf.svg"} width={1006} height={594} />
      </div>
    </section>
  );
};

export default GraphicDesignPage;

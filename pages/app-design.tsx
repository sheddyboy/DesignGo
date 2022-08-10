import Image from "next/image";
import React from "react";
import DesignCard from "../components/DesignCard";
import DisplayCard from "../components/DisplayCard";
import PageHeading from "../components/PageHeading";
import Grid from "../components/UI/Grid";
import styles from "../styles/AppDesignPage.module.css";

const AppDesignPage = () => {
  return (
    <section className={styles.section}>
      <PageHeading
        title="App Design"
        summary="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <div className="container">
        <Grid
          className={styles.grid}
          gridTemplateColumns="1fr 1fr 1fr"
          columnGap="30px"
          rowGap="32px"
        >
          <DisplayCard
            title="AIRFILTER"
            summary="Solving the problem of poor indoor air quality by filtering the air"
            imageUrl="/image-airfilter.jpg"
          />
          <DisplayCard
            title="EYECAM"
            summary="Product that lets you edit your favorite photos and videos at any time"
            imageUrl="/image-eyecam.jpg"
          />
          <DisplayCard
            title="FACEIT"
            summary="Get to meet your favorite internet superstar with the faceit app"
            imageUrl="/image-faceit.jpg"
          />
          <DisplayCard
            title="TODO"
            summary="A todo app that features cloud sync with light and dark mode"
            imageUrl="/image-todo.jpg"
          />
          <DisplayCard
            title="LOOPSTUDIOS"
            summary="A VR experience app made for Loopstudios"
            imageUrl="/image-loopstudios.jpg"
          />
        </Grid>
        <Grid
          className={styles.grid2}
          gridTemplateColumns="1fr 1fr"
          columnGap="30px"
        >
          <DesignCard
            title="WEB DESIGN"
            imageUrl="image-web-design-small.jpg"
            path="/web-design"
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

export default AppDesignPage;

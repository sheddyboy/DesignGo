import React from "react";
import styles from "../styles/DesignSection.module.css";
import DesignCard from "./DesignCard";
import Grid from "./UI/Grid";
import GridItem from "./UI/GridItem";

const DesignSection = () => {
  return (
    <section className={styles.designSection}>
      <div className="container">
        <Grid
          className={styles.grid}
          gridTemplateColumns="1fr 1fr"
          columnGap="30px"
          rowGap="24px"
        >
          <GridItem
            className={styles.gridItem}
            gridColumn="1/2"
            gridRow="1/3"
            height="640px"
          >
            <DesignCard
              title="WEB DESIGN"
              imageUrl="/image-web-design-large.jpg"
              path="/web-design"
            />
          </GridItem>
          <DesignCard
            title="App DESIGN"
            imageUrl="/image-app-design.jpg"
            path="/app-design"
          />
          <DesignCard
            title="GRAPHIC DESIGN"
            imageUrl="/image-graphic-design.jpg"
            path="/graphic-design"
          />
        </Grid>
      </div>
    </section>
  );
};

export default DesignSection;

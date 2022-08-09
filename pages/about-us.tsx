import Image from "next/image";
import React from "react";
import Location from "../components/Location";
import Card from "../components/UI/Card";
import styles from "../styles/AboutUsPage.module.css";

const AboutUsPage = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Card className={styles.aboutUs}>
          <div className={styles.content}>
            <h1>About Us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
          <div className={styles.image}>
            <Image src="/image-about-hero.jpg" width={476} height={480} />
          </div>
          <div className={styles.pattern}>
            <Image
              src="/bg-pattern-hero-about-desktop.svg"
              width={640}
              height={640}
            />
          </div>
        </Card>
        <Card className={styles.worldClass}>
          <div className={styles.image}>
            <Image
              src="/image-world-class-talent.jpg"
              width={476}
              height={640}
            />
          </div>
          <div className={styles.content}>
            <h2>World-class talent</h2>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
              <br />
              <br /> Our team is multi-disciplinary and we are not merely
              interested in form — content and meaning are just as important. We
              give great importance to craftsmanship, service, and prompt
              delivery. Clients have always been impressed with our high-quality
              outcomes that encapsulates their brand’s story and mission.
            </p>
            <div className={styles.pattern}>
              <Image
                src="/bg-pattern-three-circles.svg"
                width={584}
                height={584}
              />
            </div>
          </div>
        </Card>
        <Location />
        <Card className={styles.realDeal}>
          <div className={styles.content}>
            <h2>The real deal</h2>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
              <br />
              <br /> We are visual storytellers in appealing and captivating
              ways. By combining business and marketing strategies, we inspire
              audiences to take action and drive real results.
            </p>
            <div className={styles.pattern}>
              <Image
                src="/bg-pattern-two-circles.svg"
                width={584}
                height={292}
              />
            </div>
          </div>
          <div className={styles.image}>
            <Image src="/image-real-deal.jpg" width={476} height={640} />
          </div>
        </Card>
      </div>
      <div className={styles.leafPattern}>
        <Image src={"/bg-pattern-leaf.svg"} width={1006} height={594} />
      </div>
      <div className={styles.leafPattern2}>
        <Image src={"/bg-pattern-leaf.svg"} width={1006} height={594} />
      </div>
    </section>
  );
};

export default AboutUsPage;

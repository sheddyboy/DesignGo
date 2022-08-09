import React from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import styles from "../styles/CTA.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const CTA = () => {
  const router = useRouter();
  return (
    <section className={styles.cta}>
      <div className={"container " + styles.container}>
        <Card className={styles.flex}>
          <div className={styles.content}>
            <h2>Let’s talk about your project</h2>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className={styles.btnWrapper}>
            <Button
              type="Primary"
              onClick={() => {
                router.push("/contact");
              }}
            >
              GET IN TOUCH
            </Button>
          </div>
        </Card>
        <div className={styles.pattern}>
          <Image
            alt=""
            src={"/bg-pattern-intro-app.svg"}
            width={876}
            height={584}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;

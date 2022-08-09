import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Footer.module.css";
import CTA from "./CTA";

const Footer = () => {
  const router = useRouter();
  const validate = router.asPath.includes("contact");
  return (
    <footer
      className={styles.footer}
      style={{
        marginTop: !validate ? "380px" : "160px",
      }}
    >
      <div className="container">
        {!validate && <CTA />}
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image src={"/logo-light.png"} width={196} height={24} />
            </Link>
          </div>
          <div className={styles.navLinks}>
            <Link href={"/about-us"}>
              <a className={styles.navLink}>OUR COMPANY</a>
            </Link>
            <Link href={"/locations"}>
              <a className={styles.navLink}>LOCATIONS</a>
            </Link>
            <Link href={"/contact"}>
              <a className={styles.navLink}>CONTACT</a>
            </Link>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsLocation}>
            <div>
              Designo Central Office <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </div>
            <div>
              Contact Us (Central Office) <br />
              P : +1 253-863-8967 <br />M : contact@designo.co
            </div>
          </div>
          <div className={styles.socials}>
            <div>
              <Link href={""}>
                <a>
                  <Image src={"/icon-facebook.svg"} width={24} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <a>
                  <Image src={"/icon-youtube.svg"} width={24} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <a>
                  <Image src={"/icon-twitter.svg"} width={24} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <a>
                  <Image src={"/icon-pinterest.svg"} width={24} height={24} />
                </a>
              </Link>
            </div>
            <div>
              <Link href={""}>
                <a>
                  <Image src={"/icon-instagram.svg"} width={24} height={24} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

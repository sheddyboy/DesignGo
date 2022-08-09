import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={"container " + styles.container}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image alt="" src={"/logo-dark.png"} width={196} height={24} />
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
    </nav>
  );
};

export default Nav;

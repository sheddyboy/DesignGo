import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useGetWindowWidth from "../Hooks/useGetWindowWidth";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const [hamMenuTrigger, sethamMenuTrigger] = useState(false);
  const { windowWidth } = useGetWindowWidth();
  const handleClick = () => {
    sethamMenuTrigger((hamMenuTrigger) => !hamMenuTrigger);
  };
  const hamMenuIcon = hamMenuTrigger
    ? "/icon-close.svg"
    : "/icon-hamburger.svg";
  return (
    <>
      <nav className={styles.nav}>
        <div className={"container " + styles.container}>
          <div className={styles.logo} onClick={() => sethamMenuTrigger(false)}>
            <Link href={"/"}>
              <Image alt="" src={"/logo-dark.png"} width={196} height={24} />
            </Link>
          </div>
          {windowWidth > 800 && (
            <div className={styles.backDrop}>
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
          )}
          <div className={styles.hamMenu} onClick={handleClick}>
            <i>
              <Image src={hamMenuIcon} width={24} height={20} />
            </i>
          </div>
        </div>
      </nav>
      {windowWidth <= 800 && hamMenuTrigger && (
        <div className={styles.backDrop}>
          <div className={styles.navLinks}>
            <Link href={"/about-us"}>
              <a
                className={styles.navLink}
                onClick={() => sethamMenuTrigger(false)}
              >
                OUR COMPANY
              </a>
            </Link>
            <Link href={"/locations"}>
              <a
                onClick={() => sethamMenuTrigger(false)}
                className={styles.navLink}
              >
                LOCATIONS
              </a>
            </Link>
            <Link href={"/contact"}>
              <a
                onClick={() => sethamMenuTrigger(false)}
                className={styles.navLink}
              >
                CONTACT
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

import { useState } from "react";

import styles from "./Navigation.module.scss";

//Images
import { ReactComponent as MenuSvg } from '../../images/menu.svg';
import { ReactComponent as MenuRotSvg } from '../../images/menu-rot.svg';

import MenuCircleTab from "../MenuCircleTab/MenuCircleTab";

function Navigation() {

    const[opened, setOpened] = useState(false)

  return (
    <>
      <div className={opened ? styles.menuOpened : styles.menuClosed}>
        <div className={styles.upper}>
            <h3 className={styles.menuTitle}>MENU</h3>
            <MenuRotSvg className={styles.menuSvgRot} onClick={() => {
                setOpened(!opened)
            }}></MenuRotSvg>
        </div>
        <div className={styles.items} onClick={() => {
                    setOpened(false)
            }}>
            <div className={styles.itemsRow}>
                <MenuCircleTab href="about" number="01" text="O spoločnosti" image="menu-01.jpg"></MenuCircleTab>
                <MenuCircleTab href="offers" number="02" text="Ponúkame" image="menu-02.jpg"></MenuCircleTab>
                <MenuCircleTab href="needs" number="03" text="Potreby ľudí" image="menu-03.jpg"></MenuCircleTab>
            </div>
            <div className={styles.itemsRow}>
                <MenuCircleTab href="transform" number="04" text="Zmeň svoj život" image="menu-04.jpg"></MenuCircleTab>
                <MenuCircleTab href="partners" number="05" text="Partneri" image="menu-05.jpg"></MenuCircleTab>
                <MenuCircleTab href="contact" number="06" text="Kontakt" image="menu-06.jpg"></MenuCircleTab>
            </div>
        </div>
      </div>
      <div className={opened ? styles.navClosed : styles.navOpened}>
        <div className={styles.navItems}>
            <ul>
                <li className={styles.itemLeft}>
                    <a className={styles.itemHover} href="#about">
                        <p>01</p>
                    </a>
                </li>
                <li className={styles.itemLeft}>
                    <a className={styles.itemHover} href="#offers">
                        <p>02</p>
                    </a>
                </li>
                <li className={styles.itemLeft}>
                    <a className={styles.itemHover} href="#needs">
                        <p>03</p>
                    </a>
                </li>
                <li className={styles.itemMenu}>
                    <a className={styles.itemButton} onClick={() => {
                        setOpened(!opened)
                    }}>
                        <p className={styles.menuText}>MENU</p>
                        <MenuSvg className={styles.menuSvg}></MenuSvg>
                    </a>
                </li>
                <li className={styles.itemRight}>
                    <a className={styles.itemHover} href="#transform">
                        <p>04</p>
                    </a>
                </li>
                <li className={styles.itemRight}>
                    <a className={styles.itemHover} href="#partners">
                        <p>05</p>
                    </a>
                </li>
                <li className={styles.itemRight}>
                    <a className={styles.itemHover} href="#contact">
                        <p>06</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
  );
}

export default Navigation;

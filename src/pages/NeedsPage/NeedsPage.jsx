import { useEffect, useRef } from "react"

import styles from "./NeedsPage.module.scss"

//Images
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as HeadSvg } from "../../images/head.svg";
import { ReactComponent as CirclesSvg } from "../../images/bg-needs-circles.svg";
import { ReactComponent as OrnamentSvg } from "../../images/ornament.svg";

import moneyImage from '../../assets/images/money_2.png'

//Components
import RectangleTab from "../../components/RectangleTab/RectangleTab"

//Parallax
import simpleParallax from 'simple-parallax-js';

function NeedsPage() {

    const parallaxSection = useRef();

    useEffect(() => {
        new simpleParallax(parallaxSection.current, {
            scale: 0.4
        });
    }, [])

  return (
    <div className={styles.wrapper}>
      <div ref={parallaxSection} className={styles.headerSection}>
        <div className={styles.left}>
            <CirclesSvg className={styles.circlesSvg}></CirclesSvg>
            <HeadSvg className={styles.headSvg}></HeadSvg>
        </div>
        <div className={styles.middle}>
            <LogoSvg className={styles.logoSvg}></LogoSvg>
        </div>
        <div className={styles.right}>
              
        </div>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentHeader}>
            <h2>Potreby ľudí</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeedsPage;

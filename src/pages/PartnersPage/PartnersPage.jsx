import { useEffect, useRef } from "react"

import styles from "./PartnersPage.module.scss"

//Images
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as CirclesSvg } from "../../images/bg-partners-circles.svg";
import { ReactComponent as OrnamentSvg } from "../../images/ornament.svg";
import Background from "../../assets/paralax/bg-partners.jpg";

//Parallax
import simpleParallax from 'simple-parallax-js';

function PartnersPage() {

    const parallaxSection = useRef();

    useEffect(() => {
      //Potrebujem nastavit timeout, pretoze ak by som tak neurobil, vzdy by sa jeden parallax neaktivoval
      setTimeout(()=>{
        new simpleParallax(parallaxSection.current, {
          scale: 0.4
        });
      }, 15)
    }, [])

  return (
    <div id="partners" className={styles.wrapper}>
      <div ref={parallaxSection} className={styles.headerSection}>
        <img src={Background} alt="" />
        <div className={styles.left}>
            <CirclesSvg className={styles.circlesSvg}></CirclesSvg>
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
            <h2>Partneri</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}>
            <div className={styles.companyWrapper}>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <p>Company name</p>
                        <p>Company name</p>
                        <p>Company name</p>
                    </div>
                    <div className={styles.row}>
                        <p>Company name</p>
                        <p>Company name</p>
                        <p>Company name</p>  
                    </div>
                    <div className={styles.row}>
                        <p>Company name</p>
                        <p>Company name</p>
                        <p>Company name</p>  
                    </div>
                </div>
            </div>
          </div>
          <OrnamentSvg className={styles.ornament}></OrnamentSvg>
        </div>
      </div>
    </div>
  );
}

export default PartnersPage;

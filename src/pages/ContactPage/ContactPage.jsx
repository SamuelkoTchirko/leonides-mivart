import { useEffect, useRef } from "react"

import styles from "./ContactPage.module.scss"

//Images
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as CirclesSvg } from "../../images/bg-contact-circles.svg";
import { ReactComponent as OrnamentSvg } from "../../images/ornament.svg";
import { ReactComponent as LogoFooterSvg } from "../../images/logo-head.svg";
import Background from "../../assets/paralax/bg-contact.jpg";

//Parallax
import simpleParallax from 'simple-parallax-js';

function ContactPage() {

    const parallaxSection = useRef();

    useEffect(() => {
      setTimeout(()=>{
        new simpleParallax(parallaxSection.current, {
          scale: 0.4
        });
      }, 20)
    }, [])

  return (
    <div className={styles.wrapper}>
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
            <h2>Kontakt</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}>
            <div className={styles.addressWrapper}>
              <p className={styles.addressRow}>Adresa<pre> </pre><p className={styles.brown}>Levočská 5, Prešov, 080 01</p></p>
              <p className={styles.addressRow}>Telefón +421 905 181 972</p>
              <p className={styles.addressRow}>Mesto<pre> </pre><p className={styles.brown}>Prešov / Slovakia</p></p>
              <div className={styles.bottomLine}></div>
            </div>

            <div className={styles.formWrapper}>
              <form action="">
              <div className={styles.row}>
                <div className={styles.column}>
                  <input placeholder="Meno" type="text" required/>
                  <input placeholder="Email" type="email" required/>
                  <input placeholder="Telefón" type="tel" required/>
                </div>
                <div className={styles.column}>
                  <textarea minlength="10" placeholder="Odkaz..." cols="30" rows="7" required></textarea>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.buttonWrapper}>
                  <button type="submit">ODOSLAŤ</button>
                  <div className={styles.buttonLine}></div>
                </div>
              </div>
              </form>
            </div>

            <div className={styles.logoWrapper}>
              <LogoFooterSvg className={styles.logoFooter}></LogoFooterSvg>
              <p className={styles.brown}>Designed by</p>
              <p className={styles.letterSpacing}>PRAETORI <p className={styles.brown}>STUDIO</p></p>
              <p className={styles.brown}>2016</p>
              <p className={styles.brown}>©</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

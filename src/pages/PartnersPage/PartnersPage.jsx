import { useEffect, useRef } from "react"

import styles from "./PartnersPage.module.scss"

//Images
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as CirclesSvg } from "../../images/bg-partners-circles.svg";
import { ReactComponent as OrnamentSvg } from "../../images/ornament.svg";
import Background from "../../assets/paralax/bg-partners.jpg";

//Parallax
import simpleParallax from 'simple-parallax-js';

//Animations
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function PartnersPage() {

    const parallaxSection = useRef();

    const tl2 = useRef();

  useEffect(() => {         
    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#companies",
        start: "top center"
      }
    })
    .from(".companyMiddle", {
      y: 400, 
      duration: 1.5,
      opacity: 0
    })
    .from(".company1", {
      x: -300, 
      duration: 1.2,
      opacity: 0,
      id: "first"
    }, "<0.3")
    .from(".company2", {
      x: -300, 
      duration: 1.4,
      opacity: 0
    }, "<0.3")
    .from(".company3", {
      x: -300, 
      duration: 1.5,
      opacity: 0
    }, "<0.3")
    .from(".company4", {
      x: 300, 
       duration: 1.2,
       opacity: 0
     }, "first-=2")
     .from(".company5", {
       x: 300, 
       duration: 1.4,
       opacity: 0
     }, "<0.3")
     .from(".company6", {
       x: 300, 
       duration: 1.5,
       opacity: 0
     }, "<0.3");

  });

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
            <div className={styles.companyWrapper} id="companies">
                <div className={styles.column}>
                    <div className={styles.row}>
                      <div className="company1"><p>Company name</p></div>
                      <div className="companyMiddle"><p>Company name</p></div>
                      <div className="company4"><p>Company name</p></div>
                    </div>
                    <div className={styles.row}>
                      <div className="company2"><p>Company name</p></div>
                      <div className="companyMiddle"><p>Company name</p></div>
                      <div className="company5"><p>Company name</p></div>
                    </div>
                    <div className={styles.row}>
                      <div className="company3"><p>Company name</p></div>
                      <div className="companyMiddle"><p>Company name</p></div>
                      <div className="company6"><p>Company name</p></div>
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

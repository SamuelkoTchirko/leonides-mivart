import { useEffect, useRef } from "react"

import styles from "./TransformPage.module.scss"

//Images
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as HeadSvg } from "../../images/head.svg";
import { ReactComponent as CirclesSvg } from "../../images/bg-transform-circles.svg";
import { ReactComponent as OrnamentSvg } from "../../images/ornament.svg";
import Background from "../../assets/paralax/bg-transform.jpg";

import moneyImage from '../../assets/images/money_2.png'

//Components
import CircleTab from "../../components/CircleTab/CircleTab"

//Parallax
import simpleParallax from 'simple-parallax-js';

//Animations
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function TransformPage() {

    const parallaxSection = useRef();

    const tl2 = useRef();

  useEffect(() => {         
    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#transformTabs",
        start: "top center"
      }
    })
    .from(".tab12", {
      y: 500, 
      duration: 0.8,
      opacity: 0
    })
    .from(".tab11", {
      y: 500, 
      duration: 1.2,
      opacity: 0
    }, "<0.3")
    .from(".tab13", {
      y: 500, 
      duration: 1.3,
      opacity: 0
    }, "<0.3");

  });

    useEffect(() => {
      //Potrebujem nastavit timeout, pretoze ak by som tak neurobil, vzdy by sa jeden parallax neaktivoval
      setTimeout(()=>{
        new simpleParallax(parallaxSection.current, {
          scale: 0.4
        });
      }, 10)
    }, [])

  return (
    <div id="transform" className={styles.wrapper}>
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
            <h2>Zme?? svoj ??ivot</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}>
            <div className={styles.tabs} id="transformTabs">
              <div className="tab11"><CircleTab first_line="" second_line="" image="menu-need-2.jpg"></CircleTab></div>
              <div className="tab12"><CircleTab className={styles.middleTab} first_line="" second_line="" image="menu-need-1.jpg"></CircleTab></div>
              <div className="tab13"><CircleTab first_line="" second_line="" image="menu-need-3.jpg"></CircleTab></div>
            </div>
            <h3>Tranform your life!</h3>
            <br />
            <p className={styles.largeParagraph}>
              In??pirovan?? hist??riou sme sa aj my v spolo??nosti LEONIDES od jej vzniku zaviazali, ??e na????m poslan??m bude pozit??vne transformova?? ??udsk?? ??ivoty. 
              D??vame ??ancu ??u??om, ktor?? chc?? zmeni?? svoj ??ivot k lep??iemu a ??i?? svoje sny. Pon??kame obchodn?? pr??le??itos?? a kompletn?? syst??m, ktor?? ich privedie k ??spechu. 
              Motivujeme ??ud??, povzbudzujeme ich, aby nabrali odvahu zobra?? ??ivot do vlastn??ch r??k a vytvori?? si svoju vlastn?? vysn??van?? bud??cnos??. Sme presved??en??, 
              ??e ka??d?? ??lovek by mal dosta?? ??ancu ??i?? ??ivot, ak?? si s??m vysn??val. Na??e poslanie, syst??m, a v??zia pom??ha k vytv??raniu hodn??t, ????m prispievame k dobru celej spolo??nosti. 
              LEONIDES ti pon??ka nov?? mo??nosti!
            </p>
            <br />
            <p className={styles.grayText}>Kari??ra:</p>
            <i className={styles.grayText}>Vyv????en?? a motivuj??ca!</i>
            <br />
            <p className={styles.grayText}>Soci??lny program:</p>
            <i className={styles.grayText}>Zabezpe??enie krytia v pr??pade neo??ak??van??ch udalost?? pre mana????rov</i>
            <br />
            <p className={styles.grayText}>Auto koncept:</p>
            <i className={styles.grayText}>luxusn?? aut??</i>
            <br />
            <p className={styles.grayText}>Akcion??rsky model:</p>
            <i className={styles.grayText}>sta?? sa spolumajite??om</i>
            <br />
            <p className={styles.grayText}>Dovolenky:</p>
            <i className={styles.grayText}>Exkluz??vna dovolenka 2 kr??t do roka</i>
            <br />
            <p className={styles.grayText}>Bonusy:</p>
            <i className={styles.grayText}>Motiva??n?? s????a??e a benefity</i>
            <br />
            <p className={styles.grayText}>Prest????ne vzdel??vanie:</p>
            <i className={styles.grayText}>NLP, akad??mia vzdel??vania</i>
            <br />
            <OrnamentSvg className={styles.ornament}></OrnamentSvg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransformPage;

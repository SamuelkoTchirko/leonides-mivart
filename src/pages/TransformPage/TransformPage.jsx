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

function TransformPage() {

    const parallaxSection = useRef();

    useEffect(() => {
      //Potrebujem nastavit timeout, pretoze ak by som tak neurobil, vzdy by sa jeden parallax neaktivoval
      setTimeout(()=>{
        new simpleParallax(parallaxSection.current, {
          scale: 0.4
        });
      }, 10)
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
            <h2>Zmeň svoj život</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}>
            <div className={styles.tabs}>
              <CircleTab first_line="" second_line="" image="menu-need-2.jpg"></CircleTab>
              <CircleTab className={styles.middleTab} first_line="" second_line="" image="menu-need-1.jpg"></CircleTab>
              <CircleTab first_line="" second_line="" image="menu-need-3.jpg"></CircleTab>
            </div>
            <h3>Tranform your life!</h3>
            <br />
            <p className={styles.largeParagraph}>
              Inšpirovaní históriou sme sa aj my v spoločnosti LEONIDES od jej vzniku zaviazali, že naším poslaním bude pozitívne transformovať ľudské životy. 
              Dávame šancu ľuďom, ktorí chcú zmeniť svoj život k lepšiemu a žiť svoje sny. Ponúkame obchodnú príležitosť a kompletný systém, ktorý ich privedie k úspechu. 
              Motivujeme ľudí, povzbudzujeme ich, aby nabrali odvahu zobrať život do vlastných rúk a vytvoriť si svoju vlastnú vysnívanú budúcnosť. Sme presvedčení, 
              že každý človek by mal dostať šancu žiť život, aký si sám vysníval. Naše poslanie, systém, a vízia pomáha k vytváraniu hodnôt, čím prispievame k dobru celej spoločnosti. 
              LEONIDES ti ponúka nové možnosti!
            </p>
            <br />
            <p>Kariéra:</p>
            <i>Vyvážená a motivujúca!</i>
            <br />
            <p>Sociálny program:</p>
            <i>Zabezpečenie krytia v prípade neočakávaných udalostí pre manažérov</i>
            <br />
            <p>Auto koncept:</p>
            <i>luxusné autá</i>
            <br />
            <p>Akcionársky model:</p>
            <i>stať sa spolumajiteľom</i>
            <br />
            <p>Dovolenky:</p>
            <i>Exkluzívna dovolenka 2 krát do roka</i>
            <br />
            <p>Bonusy:</p>
            <i>Motivačné súťaže a benefity</i>
            <br />
            <p>Prestížne vzdelávanie:</p>
            <i>NLP, akadémia vzdelávania</i>
            <br />
            <OrnamentSvg className={styles.ornament}></OrnamentSvg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransformPage;

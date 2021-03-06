import { useEffect, useRef } from "react";

import styles from "./AboutPage.module.scss"

//Images
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as OrnamentSvg } from "../../images/ornament.svg";

import moneyImage from '../../assets/images/money_2.png'

//Components
import RectangleTab from "../../components/RectangleTab/RectangleTab"

//Animations
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function AboutPage() {

  const tl = useRef();

  useEffect(() => {         


    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutTabs",
        start: "top center"
      }
    })
    .from(".tab1", {
      y: 500, 
      duration: 0.8,
      opacity: 0
    })
    .from(".tab2", {
      y: 500, 
      duration: 1.2,
      opacity: 0
    }, "<0.3")
    .from(".tab3", {
      y: 500, 
      duration: 1.2,
      opacity: 0
    }, "<0.3");


  });


  return (
    <div id="about" className={styles.wrapper}>
      <div className={styles.headerSection}>
        <LogoSvg className={styles.logoSvg}></LogoSvg>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentHeader}>
            <h2>O spoločnosti</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}> 
            <div className={styles.tabs} id="aboutTabs">
              <div className="tab1"><RectangleTab first_line="Inšpirovaní" second_line="históriou" image="menu-about-1.jpg"></RectangleTab></div>
              <div className="tab2"><RectangleTab first_line="Vízia" second_line="a poslanie" image="menu-about-2.jpg"></RectangleTab></div>
              <div className="tab3"><RectangleTab first_line="Hodnoty" second_line="leonides" image="menu-about-3.jpg"></RectangleTab></div>
            </div>
            <h2>
              Inšpirovaní históriou
            </h2>
            <p className={styles.grayText}>
              Staroveké Grécko je označované kolískou európskej civilizácie. Najpokrokovejším objavom je demokracia, 
              o ktorú sa usilujú všetky súčasné štátne zriadenia. Veľkým gréckym zázrakom je vznik filozofie. 
              Diela starovekých gréckych filozofov sú studnicou nevyčerpateľného poznania a inšpirácie. 
              Tu boli položené základy dnešných vedných disciplín ako fyzika, botanika, logika, rečníctvo a politické vedy. 
              Veľký rozmach v stavebnom umení priniesol pokroky vznik vodovodu, kanalizácie, či kúpeľov. Grécka kultúra, lyrika, divadlo, školstvo a olympiáda - 
              to všetko malo byť zničené kráľom Perzskej ríše Xerxesom. Mala to byť pomsta za desať rokov starú prehru jeho otca. 
              Zhromaždil preto najväčšiu armádu tej doby s úmyslom podmaniť si celé Grécko.
            </p>
            <br />
            <p className={styles.grayText}>
              Na odpor sa mu postavil jediný človek z celého Grécka, kráľ Sparty Leonidas. 
              Kráľ, ktorý chcel uchrániť svoj národ pred smrťou a otroctvom. Leonidas vedel, 
              že jediná možnosť postaviť sa na odpor je v priesmyku v Termopylách. Tam Peržanom nepomôže ani mnohopočetná presila, keďže sa bude bojovať na úzkom úseku priesmyku. 
              Preto kráľ Leonidas s tristo najlepšími vojakmi vyrazil na boj k Termopylám, kde čakali na blížiaceho sa Xerxesa a jeho armádu. 
              Tri dni odolávala sparťanská armáda náporu Peržanov vďaka úzkemu priesmyku a dobre vyzbrojeným Sparťanom. Barbarom neumožnili uplatniť obrovskú presilu. 
              Bolo otázkou času, kedy sa bitka skončí a hrdinskí bojovníci padnú. 
              V tejto dobe sa roztrieštené Grécko spojilo a vyrazilo do boja proti Peržanom, ktorých definitívne porazili. 
            </p>
            <br />
            <p className={styles.grayText}>
              Odkaz pre dnešné generácie <br />
              Táto bitka a nekonečné hrdinstvo Leonidasa bola jedným z najzásadnejších okamihov vývoja našej ľudskej civilizácie. Túžba pokračovať bola silnejšia, 
              ako túžba prestať. <i>Hrdinstvo, odvaha, vytrvalosť, vášeň a túžba</i> nás inšpirovala a stále inšpiruje v spoločnosti LEONIDES.
            </p>
            <br />
            <h2>
              Vízia a poslanie LEONIDES
            </h2>
            <br />
            <p className={styles.grayText}>
              Kráľ Leonidas sa svojou odvahou a vierou vzoprel otroctvu a tyranii Perzskej ríše, čím uchránil základné ľudské hodnoty ako je sloboda a demokracia. 
              Svojim hrdinstvom ovplyvnil vývoj celej civilizácie až po dnešok. Inšpirovaní históriou sme sa aj my v spoločnosti LEONIDES od jej vzniku zaviazali, 
              že naším poslaním bude pozitívne transformovať ľudské životy. Naším klientom prinášame transparentné informácie pod „ pokrývkou“ finančného trhu, 
              o ktorých sa otvorene nehovorí. Prinášame reálne riešenia, výhodné produkty a zodpovedný prístup. Dávame šancu ľudom, ktorí chcú zmeniť svoj život k lepšiemu a žiť svoje sny. 
              Ponúkame obchodnú príležitosť a kompletný systém, ktorý ich privedie k úspechu. Motivujeme ľudí, povzbudzujeme ich, 
              aby nabrali odvahu zobrať život do vlastných rúk a vytvorili si svoju vlastnú, vysnívanú budúcnosť. Sme presvedčení, že každý človek by mal dostať šancu žiť život, 
              aký si sám vysníval. Naše poslanie, systém, a vízia pomáha k vytváraniu hodnôt, čím prispievame k dobru celej spoločnosti.
            </p>
            <br />
            <h2>
              Hodnoty
            </h2>
            <br />
            <div className={styles.grayTextWrap}>
              <p>Transparentnosť</p><br />
              <p>Etika</p><br />
              <p>Odvaha</p><br />
              <p>Viera</p><br />
              <p>Líderstvo</p><br />
              <p>Vzdelávanie</p><br />
              <p>Tímovosť</p><br />
              <p>Presvedčenie</p><br />
            </div>
            <br />
            <div className={styles.bottomContent}>
              <div className={styles.left}>

              </div>
              <div className={styles.middle}>
                <p className={styles.grayText}>
                  STABILITA A ZÁZEMIE SPOLOČNOSTI<br />
                  Vznik v roku 2009. Viac ako 10 ročná prax v odbore.<br />
                  Sme členom AFISP. Povolenie NBS, PAG.<br />
                  Certifikát solventných firiem.<br />
                  V rokoch 2014 - 2015 spoločnosť ocenená ako TOP externý partner.<br />
                </p>
                <OrnamentSvg></OrnamentSvg>
              </div>
              <div className={styles.right}>
                <img className={styles.moneyImage}src={moneyImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

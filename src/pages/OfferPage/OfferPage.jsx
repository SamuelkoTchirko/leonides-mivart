import { useEffect, useRef } from "react"

import styles from "./OfferPage.module.scss"

//Images
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as CirclesSvg } from "../../images/bg-offer-circles.svg";
import { ReactComponent as OrnamentSvg } from "../../images/ornament.svg";
import Background from "../../assets/paralax/bg-offer.jpg";

import moneyImage from '../../assets/images/money.png'

//Components
import RectangleTab from "../../components/RectangleTab/RectangleTab"

//Parallax
import simpleParallax from 'simple-parallax-js';

function OfferPage() {

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
    <div className={styles.wrapper}>
      <div  ref={parallaxSection} className={styles.headerSection}>
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
            <h2>Čo ponúka Leonides</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}>
            <div className={styles.tabs}>
              <RectangleTab first_line="" second_line="Informácie" image="menu-offer-1.jpg"></RectangleTab>
              <RectangleTab first_line="Osobný" second_line="Rozvoj" image="menu-02.jpg"></RectangleTab>
              <RectangleTab first_line="" second_line="Príležitosť" image="menu-03.jpg"></RectangleTab>
            </div>
            <h3>
              Informácie
            </h3>
            <p>
                Žijeme v informačnej dobe a vďaka internetu a mobilnej komunikácií je dostupnosť a výmena informácií na najvyššej úrovni v histórií. Trendy sa otočili. Tak, ako sa v minulosti bolo obtiažné k informáciám dostať, v dnešnej dobe je tých informácií veľmi veľa. Preto je náročné z toho kvanta informácií si správne vybrať. Prinášame klientom transparentné informácie z finančného trhu. Ponúkame reálne riešenia, výhodne produkty a zodpovedný prístup, čo nám umožňuje riešiť skutočné potreby klientov. Touto službou dávame ľuďom možnosti, ako zmeniť svoj život k lepšiemu.
            </p>
            <br />
            <p>
                Skĺbili sme to do štyroch základných bodov:
            </p>
            <br />
            <ul>
                <li>Ako sa nenechať zaviesť</li>
                <li>Ako neplatiť zbytočne poplatky</li>
                <li>Ako a kam investovať</li>
                <li>Ako byť finančne gramotný</li>
            </ul>
            <br />
            <h3>
                Osobný rozvoj
            </h3>
            <br />
            <p>
                Výsledok z uskutočnených prieskumov spokojnosti v zamestnaní ukázal, že väčšina ľudí robí prácu, ktorá ich nebaví a majú pocit, že sú za ňu slabo ohodnotení. Pravda je taká, že príjem človeka sa rovná znalostiam, ktoré ten človek má a aká je jeho hodnota na trhu práce. Je to jednoduché. Chcete zarábať viac? Zvýšte svoju hodnotu a trh Vás zaplatí. Práve preto ľuďom ponúkame možnosť zúčastniť sa našej akadémie vzdelávania, kde si môžu zvýšiť svoju vnútornú hodnotu, ktorá im pomôže získať lepšie uplatnenie v živote. Rovnako ponúkame možnosť získať prestížne certifikáty v rámci psychológie, obchodu, manažmentu a riadenia.
            </p>
            <br />
            <ul>
                <li>Aktívny sebarozvoj</li>
                <li>Zvýšenie svojej vnútornej hodnoty</li>
                <li>Akadémia vzdelávania</li>
                <li>Zabezpečujeme TOP vzdelávania pre našich spolupracovníkov</li>
            </ul>
            <br />
            <h3>
                Príležitosť
            </h3>
            <br />
            <p>
                Možno ste sa už stretli s názorom, že doba je ťažká, že kríza ešte neskončila, že na Slovensku je málo príležitostí. Zamýšľali ste sa ale nad tým, kedy v histórii bola ta správna doba? Ľudia si neuvedomujú, že nikdy v histórií nebola lepšia doba z pohľadu príležitostí, ako je dnes. Žijeme v informačnej dobe. Vďaka internetu a mobilnej komunikácií je dostupnosť a výmena informácií na najvyššej úrovni. Vďaka otvoreniu hraníc nastal voľný pohyb tovarov a služieb. Prichádzajú inovácie, technológie a stým aj nové príležitosti. Životná úroveň Slovákov sa každým rokom zvyšuje a tým aj ich potreby.
            </p>
            <i>DNES JE TA NAJLEPŠIA DOBA AKÁ TU KEDY BOLA!</i>
            <br />
            <p>
                Pre správnych ľudí - správna príležitosť! LEONIDES dáva šancu každému, kto chce zmeniť svoj život k lepšiemu a žiť svoje sny. Motivujeme a povzbudzujme ľudí, aby si dokázali vytvoriť vlastnú budúcnosť a nabrali odvahu zobrať život do vlastných rúk. Jedinečný systém, poslanie a vízia pomáha k vytváraniu hodnôt a tým prispievame k dobru nielen našich klientov, ale celej spoločnosti.
            </p>
            <br />
            <p>Obchodná príležitosť ktorá Vám môže priniesť:</p>
            <ul>
                <li>Príjem naviac</li>
                <li>Finančnú nezávislosť</li>
                <li>Možnosť pomáhať iným</li>
                <li>Príležitosť stretávať sa s ľudmi</li>
            </ul>
            <OrnamentSvg className={styles.ornament}></OrnamentSvg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferPage;

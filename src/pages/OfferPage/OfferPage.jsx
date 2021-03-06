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

//Animations
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function OfferPage() {

    const parallaxSection = useRef();

    const tl2 = useRef();

  useEffect(() => {         
    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#offerTabs",
        start: "top center"
      }
    })
    .from(".tab4", {
      y: 500, 
      duration: 0.8,
      opacity: 0
    })
    .from(".tab5", {
      y: 500, 
      duration: 1.2,
      opacity: 0
    }, "<0.3")
    .from(".tab6", {
      y: 500, 
      duration: 1.2,
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
    <div  id="offers" className={styles.wrapper}>
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
            <h2>??o pon??ka Leonides</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}>
            <div className={styles.tabs} id="offerTabs">
              <div className="tab4"><RectangleTab first_line="" second_line="Inform??cie" image="menu-offer-1.jpg"></RectangleTab></div>
              <div className="tab5"><RectangleTab first_line="Osobn??" second_line="Rozvoj" image="menu-offer-2.jpg"></RectangleTab></div>
              <div className="tab6"><RectangleTab first_line="" second_line="Pr??le??itos??" image="menu-offer-3.jpg"></RectangleTab></div>
            </div>
            <h3>
              Inform??cie
            </h3>
            <p className={styles.grayText}>
                ??ijeme v informa??nej dobe a v??aka internetu a mobilnej komunik??ci?? je dostupnos?? a v??mena inform??ci?? na najvy????ej ??rovni v hist??ri??. Trendy sa oto??ili. Tak, ako sa v minulosti bolo obtia??n?? k inform??ci??m dosta??, v dne??nej dobe je t??ch inform??ci?? ve??mi ve??a. Preto je n??ro??n?? z toho kvanta inform??ci?? si spr??vne vybra??. Prin????ame klientom transparentn?? inform??cie z finan??n??ho trhu. Pon??kame re??lne rie??enia, v??hodne produkty a zodpovedn?? pr??stup, ??o n??m umo????uje rie??i?? skuto??n?? potreby klientov. Touto slu??bou d??vame ??u??om mo??nosti, ako zmeni?? svoj ??ivot k lep??iemu.
            </p>
            <br />
            <p className={styles.grayText}>
                Sk??bili sme to do ??tyroch z??kladn??ch bodov:
            </p>
            <br />
            <ul className={styles.grayText}>
                <li>Ako sa nenecha?? zavies??</li>
                <li>Ako neplati?? zbyto??ne poplatky</li>
                <li>Ako a kam investova??</li>
                <li>Ako by?? finan??ne gramotn??</li>
            </ul>
            <br />
            <h3>
                Osobn?? rozvoj
            </h3>
            <br />
            <p className={styles.grayText}>
                V??sledok z uskuto??nen??ch prieskumov spokojnosti v zamestnan?? uk??zal, ??e v??????ina ??ud?? rob?? pr??cu, ktor?? ich nebav?? a maj?? pocit, ??e s?? za ??u slabo ohodnoten??. Pravda je tak??, ??e pr??jem ??loveka sa rovn?? znalostiam, ktor?? ten ??lovek m?? a ak?? je jeho hodnota na trhu pr??ce. Je to jednoduch??. Chcete zar??ba?? viac? Zv????te svoju hodnotu a trh V??s zaplat??. Pr??ve preto ??u??om pon??kame mo??nos?? z????astni?? sa na??ej akad??mie vzdel??vania, kde si m????u zv????i?? svoju vn??torn?? hodnotu, ktor?? im pom????e z??ska?? lep??ie uplatnenie v ??ivote. Rovnako pon??kame mo??nos?? z??ska?? prest????ne certifik??ty v r??mci psychol??gie, obchodu, mana??mentu a riadenia.
            </p>
            <br />
            <ul className={styles.grayText}>
                <li>Akt??vny sebarozvoj</li>
                <li>Zv????enie svojej vn??tornej hodnoty</li>
                <li>Akad??mia vzdel??vania</li>
                <li>Zabezpe??ujeme TOP vzdel??vania pre na??ich spolupracovn??kov</li>
            </ul>
            <br />
            <h3>
                Pr??le??itos??
            </h3>
            <br />
            <p className={styles.grayText}>
                Mo??no ste sa u?? stretli s n??zorom, ??e doba je ??a??k??, ??e kr??za e??te neskon??ila, ??e na Slovensku je m??lo pr??le??itost??. Zam??????ali ste sa ale nad t??m, kedy v hist??rii bola ta spr??vna doba? ??udia si neuvedomuj??, ??e nikdy v hist??ri?? nebola lep??ia doba z poh??adu pr??le??itost??, ako je dnes. ??ijeme v informa??nej dobe. V??aka internetu a mobilnej komunik??ci?? je dostupnos?? a v??mena inform??ci?? na najvy????ej ??rovni. V??aka otvoreniu hran??c nastal vo??n?? pohyb tovarov a slu??ieb. Prich??dzaj?? inov??cie, technol??gie a st??m aj nov?? pr??le??itosti. ??ivotn?? ??rove?? Slov??kov sa ka??d??m rokom zvy??uje a t??m aj ich potreby.
            </p>
            <i>DNES JE TA NAJLEP??IA DOBA AK?? TU KEDY BOLA!</i>
            <br />
            <p className={styles.grayText}>
                Pre spr??vnych ??ud?? - spr??vna pr??le??itos??! LEONIDES d??va ??ancu ka??d??mu, kto chce zmeni?? svoj ??ivot k lep??iemu a ??i?? svoje sny. Motivujeme a povzbudzujme ??ud??, aby si dok??zali vytvori?? vlastn?? bud??cnos?? a nabrali odvahu zobra?? ??ivot do vlastn??ch r??k. Jedine??n?? syst??m, poslanie a v??zia pom??ha k vytv??raniu hodn??t a t??m prispievame k dobru nielen na??ich klientov, ale celej spolo??nosti.
            </p>
            <br />
            <p className={styles.grayText}>Obchodn?? pr??le??itos?? ktor?? V??m m????e prinies??:</p>
            <ul className={styles.grayText}>
                <li>Pr??jem naviac</li>
                <li>Finan??n?? nez??vislos??</li>
                <li>Mo??nos?? pom??ha?? in??m</li>
                <li>Pr??le??itos?? stret??va?? sa s ??udmi</li>
            </ul>
            <OrnamentSvg className={styles.ornament}></OrnamentSvg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferPage;

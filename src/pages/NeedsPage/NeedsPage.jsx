import { useEffect, useRef } from "react"

import styles from "./NeedsPage.module.scss"

//Images
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { ReactComponent as HeadSvg } from "../../images/head.svg";
import { ReactComponent as CirclesSvg } from "../../images/bg-needs-circles.svg";
import { ReactComponent as OrnamentSvg } from "../../images/ornament.svg";

import moneyImage from '../../assets/images/money_2.png'

//Components
import CircleTab from "../../components/CircleTab/CircleTab"

//Parallax
import simpleParallax from 'simple-parallax-js';

function NeedsPage() {

    const parallaxSection = useRef();

    useEffect(() => {
      //Potrebujem nastavit timeout, pretoze ak by som tak neurobil, vzdy by sa jeden parallax neaktivoval
      setTimeout(()=>{
        new simpleParallax(parallaxSection.current, {
          scale: 0.4
        });
      }, 5)
    }, [])

  return (
    <div className={styles.wrapper}>
      <div ref={parallaxSection} className={styles.headerSection}>
        <img src="" alt="" />
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
            <div className={styles.tabs}>
              <CircleTab first_line="" second_line="Deti" image="menu-need-1.jpg"></CircleTab>
              <CircleTab first_line="" second_line="Bývanie" image="menu-need-2.jpg"></CircleTab>
              <CircleTab first_line="" second_line="Sporenie" image="menu-need-3.jpg"></CircleTab>
              <CircleTab first_line="" second_line="Dôchodok" image="menu-need-4.jpg"></CircleTab>
            </div>
            <p>
              <i>“ V Taliansku ľudia často používajú termín „sacrificio“ 
              čo znamená odriekanie - obetovanie, ktoré často znášajú, aby zlepšili svoj život, 
              aj život svojich detí i celej rodiny. Obetujú mnoho príjemných a lákavých vecí preto, 
              aby si oni a ich blízki mohli v budúcnosti viac užívať. Peniaze, ktoré nasporíme dnes, 
              nám ušetria starostí zajtrajška. Sporenie a investovanie je skutočne jedinou prácou, 
              ktorú robíme len a len pre seba. Už v starom Babylone ľudia vedeli, 
              že 10% z príjmu im zabezpečí do budúcna bohatstvo. Je dokázané, 
              že ak človeku z mesiaca na mesiac klesne príjem o 10%, jeho kvalita života sa nijako 
              zásadne nezmení. Sú štyri základné dôvody prečo si ľudia najčastejšie sporia. ”
              </i>
            </p>
            <ul>
              <li>
                <h3>
                  Deti
                </h3>
                <p>
                Deti sú naša budúcnosť, preto je základnou úlohou rodiča zabezpečiť im kvalitné štúdium alebo podporovať ich talent. V dnešnej dobe je finančne náročné zabezpečiť potreby dieťaťa a môže to nadmerne zaťažiť rodinný rozpočet. Preto najlepšou voľbou je sporiť dieťaťu od narodenia v kvalitnom produkte s nízkymi poplatkami a zaujímavým výnosom.
                </p>
              </li>
              <li>
                <h3>
                  Bývanie
                </h3>
                <p>
                Bývanie je základná ľudská potreba, ktorú rieši každý človek vo svojom živote. Bývanie je zároveň najnákladnejšia potreba, ktorá sa vo väčšine prípadov nezaobíde bez hypotéky. Zorientovať sa v množstve ponúk, informácií súvisiacich s ohodnotením nehnuteľností, legislatívou a ďalšie náležitosti, to všetko si vyžaduje odbornú znalosť a veľké množstvo času. Práve preto, Vám náš tím odborníkov pomôže zorientovať sa a sprostredkuje kompletné financovanie Vášho vysnívaného bývania.
                </p>
              </li>
              <li>
                <h3>
                  Bezúčelové sporenie
                </h3>
                <p>
                Či už je to auto, vysnívaná dovolenka alebo tvorba rezerv, toto všetko si vyžaduje správne naplánovanie a sebadisciplínu. Nie nadarmo sa hovorí, že ľudia neplánujú zlyhávať, ale zlyhávajú pri plánovaní. Preto by každé portfólio malo obsahovať v prvom rade zabezpečenie príjmu, ktoré človek dokáže využiť v situáciách, keď jeho príjem poklesne, prípadne dôjde k strate živiteľa rodiny. V neposlednom rade by nemala v portfóliu chýbať tvorba rezervy, použiteľná pre rôzne prípady neočakávaných udalosti. Najviac finančných problémov a sociálnych prípadov je z nepredvídateľných udalostí. Každé možné riziko sa dá predvídať a eliminovať jeho dopad na rodinu. Pomôžeme Vám naplánovať vaše sny a ciele tak, aby sa stali skutočnosťou.
                </p>
              </li>
              <li>
                <h3>
                  Dôchodok
                </h3>
                <p>
                Demografický vývoj populácie sa na Slovensku vyvíja nepriaznivo. Pôrodnosť klesla v porovnaní od roku 1980 a až do roku 2013 o polovicu. Populácia na Slovensku starne a rodí sa stále menej a menej detí. Tento fakt ma zásadný vplyv na dôchodkový systém na Slovensku, ktorý je už dnes neudržateľný. Dnes je Sociálna poisťovňa cca 1 mld. EUR v mínuse a každý rok sa tento schodok bude dotovať zo štátneho rozpočtu. Už dnes je jasné, že tento dôchodkový systém nie je udržateľný. Dôchodok nebude otázkou veku, ale peňazí. Prvý pilier, čiže dôchodok zo Sociálnej poisťovne bude len akási podpora v starobe a základ dôchodku budú tvoriť peniaze zo súkromných zdrojov, ktoré si ľudia musia vytvoriť počas aktívneho pracovného života. Preto je III. pilier neodmysliteľnou súčasťou každého človeka, ktorý chce stráviť dôstojný život na dôchodku.
                </p>
              </li>
            </ul>
            <OrnamentSvg></OrnamentSvg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeedsPage;

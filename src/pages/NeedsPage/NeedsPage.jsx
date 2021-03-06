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

//Animations
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function NeedsPage() {

    const parallaxSection = useRef();

    const tl2 = useRef();

  useEffect(() => {         
    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#needsTabs",
        start: "top center"
      }
    })
    .from(".tab7", {
      y: 500, 
      duration: 0.8,
      opacity: 0
    })
    .from(".tab8", {
      y: 500, 
      duration: 1.2,
      opacity: 0
    }, "<0.3")
    .from(".tab9", {
      y: 500, 
      duration: 1.4,
      opacity: 0
    }, "<0.3")
    .from(".tab10", {
      y: 500, 
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
      }, 5)
    }, [])

  return (
    <div id="needs" className={styles.wrapper}>
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
            <h2>Potreby ??ud??</h2>
            <p>LEONIDES</p>
            <OrnamentSvg></OrnamentSvg>
          </div>
          <div className={styles.content}>
            <div className={styles.tabs} id="needsTabs">
              <div className="tab7"><CircleTab first_line="" second_line="Deti" image="menu-need-1.jpg"></CircleTab></div>
              <div className="tab8"><CircleTab first_line="" second_line="B??vanie" image="menu-need-2.jpg"></CircleTab></div>
              <div className="tab9"><CircleTab first_line="" second_line="Sporenie" image="menu-need-3.jpg"></CircleTab></div>
              <div className="tab10"><CircleTab first_line="" second_line="D??chodok" image="menu-need-4.jpg"></CircleTab></div>
            </div>
            <p className={styles.grayText}>
              <i>??? V Taliansku ??udia ??asto pou????vaj?? term??n ???sacrificio??? 
              ??o znamen?? odriekanie - obetovanie, ktor?? ??asto zn????aj??, aby zlep??ili svoj ??ivot, 
              aj ??ivot svojich det?? i celej rodiny. Obetuj?? mnoho pr??jemn??ch a l??kav??ch vec?? preto, 
              aby si oni a ich bl??zki mohli v bud??cnosti viac u????va??. Peniaze, ktor?? naspor??me dnes, 
              n??m u??etria starost?? zajtraj??ka. Sporenie a investovanie je skuto??ne jedinou pr??cou, 
              ktor?? rob??me len a len pre seba. U?? v starom Babylone ??udia vedeli, 
              ??e 10% z pr??jmu im zabezpe???? do bud??cna bohatstvo. Je dok??zan??, 
              ??e ak ??loveku z mesiaca na mesiac klesne pr??jem o 10%, jeho kvalita ??ivota sa nijako 
              z??sadne nezmen??. S?? ??tyri z??kladn?? d??vody pre??o si ??udia naj??astej??ie sporia. ???
              </i>
            </p>
            <ul className={styles.grayText}>
              <li>
                <h3>
                  Deti
                </h3>
                <p>
                Deti s?? na??a bud??cnos??, preto je z??kladnou ??lohou rodi??a zabezpe??i?? im kvalitn?? ??t??dium alebo podporova?? ich talent. V dne??nej dobe je finan??ne n??ro??n?? zabezpe??i?? potreby die??a??a a m????e to nadmerne za??a??i?? rodinn?? rozpo??et. Preto najlep??ou vo??bou je spori?? die??a??u od narodenia v kvalitnom produkte s n??zkymi poplatkami a zauj??mav??m v??nosom.
                </p>
              </li>
              <li>
                <h3>
                  B??vanie
                </h3>
                <p>
                B??vanie je z??kladn?? ??udsk?? potreba, ktor?? rie??i ka??d?? ??lovek vo svojom ??ivote. B??vanie je z??rove?? najn??kladnej??ia potreba, ktor?? sa vo v??????ine pr??padov nezaob??de bez hypot??ky. Zorientova?? sa v mno??stve pon??k, inform??ci?? s??visiacich s ohodnoten??m nehnute??nost??, legislat??vou a ??al??ie n??le??itosti, to v??etko si vy??aduje odborn?? znalos?? a ve??k?? mno??stvo ??asu. Pr??ve preto, V??m n???? t??m odborn??kov pom????e zorientova?? sa a sprostredkuje kompletn?? financovanie V????ho vysn??van??ho b??vania.
                </p>
              </li>
              <li>
                <h3>
                  Bez????elov?? sporenie
                </h3>
                <p>
                ??i u?? je to auto, vysn??van?? dovolenka alebo tvorba rezerv, toto v??etko si vy??aduje spr??vne napl??novanie a sebadiscipl??nu. Nie nadarmo sa hovor??, ??e ??udia nepl??nuj?? zlyh??va??, ale zlyh??vaj?? pri pl??novan??. Preto by ka??d?? portf??lio malo obsahova?? v prvom rade zabezpe??enie pr??jmu, ktor?? ??lovek dok????e vyu??i?? v situ??ci??ch, ke?? jeho pr??jem poklesne, pr??padne d??jde k strate ??ivite??a rodiny. V neposlednom rade by nemala v portf??liu ch??ba?? tvorba rezervy, pou??ite??n?? pre r??zne pr??pady neo??ak??van??ch udalosti. Najviac finan??n??ch probl??mov a soci??lnych pr??padov je z nepredv??date??n??ch udalost??. Ka??d?? mo??n?? riziko sa d?? predv??da?? a eliminova?? jeho dopad na rodinu. Pom????eme V??m napl??nova?? va??e sny a ciele tak, aby sa stali skuto??nos??ou.
                </p>
              </li>
              <li>
                <h3>
                  D??chodok
                </h3>
                <p>
                Demografick?? v??voj popul??cie sa na Slovensku vyv??ja nepriaznivo. P??rodnos?? klesla v porovnan?? od roku 1980 a a?? do roku 2013 o polovicu. Popul??cia na Slovensku starne a rod?? sa st??le menej a menej det??. Tento fakt ma z??sadn?? vplyv na d??chodkov?? syst??m na Slovensku, ktor?? je u?? dnes neudr??ate??n??. Dnes je Soci??lna pois??ov??a cca 1 mld. EUR v m??nuse a ka??d?? rok sa tento schodok bude dotova?? zo ??t??tneho rozpo??tu. U?? dnes je jasn??, ??e tento d??chodkov?? syst??m nie je udr??ate??n??. D??chodok nebude ot??zkou veku, ale pe??az??. Prv?? pilier, ??i??e d??chodok zo Soci??lnej pois??ovne bude len ak??si podpora v starobe a z??klad d??chodku bud?? tvori?? peniaze zo s??kromn??ch zdrojov, ktor?? si ??udia musia vytvori?? po??as akt??vneho pracovn??ho ??ivota. Preto je III. pilier neodmyslite??nou s????as??ou ka??d??ho ??loveka, ktor?? chce str??vi?? d??stojn?? ??ivot na d??chodku.
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

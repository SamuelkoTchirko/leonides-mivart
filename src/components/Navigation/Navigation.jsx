import styles from "./Navigation.module.scss";

//Images
import { ReactComponent as MenuSvg } from '../../images/menu.svg';

function Navigation() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.navItems}>
            <ul>
                <li className={styles.itemLeft}>
                    <a className={styles.itemHover} href="">
                        <p>01</p>
                    </a>
                </li>
                <li className={styles.itemLeft}>
                    <a className={styles.itemHover} href="">
                        <p>02</p>
                    </a>
                </li>
                <li className={styles.itemLeft}>
                    <a className={styles.itemHover} href="">
                        <p>03</p>
                    </a>
                </li>
                <li className={styles.itemMenu}>
                    <a className={styles.itemButton} href="">
                        <p className={styles.menuText}>MENU</p>
                        <MenuSvg className={styles.menuSvg}></MenuSvg>
                    </a>
                </li>
                <li className={styles.itemRight}>
                    <a className={styles.itemHover} href="">
                        <p>04</p>
                    </a>
                </li>
                <li className={styles.itemRight}>
                    <a className={styles.itemHover} href="">
                        <p>05</p>
                    </a>
                </li>
                <li className={styles.itemRight}>
                    <a className={styles.itemHover} href="">
                        <p>06</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navigation;

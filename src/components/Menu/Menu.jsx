import { useEffect, useState } from "react"

import styles from "./Menu.module.scss";

//Images
import { ReactComponent as MenuSvg } from '../../images/menu.svg';

function Menu(props) {

    
  return (
    <div className={ props.opened ? styles.openedWrapper : styles.closedWrapper}>
        
    </div>
  );
}

export default Menu;

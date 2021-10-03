import { useState, useEffect } from "react";

import styles from "./MenuCircleTab.module.scss";

//Images
import { ReactComponent as CircleSvg } from '../../images/circle.svg';


function MenuCircleTab(props) {
    
  const [image, setImage] = useState("")  

  useEffect(() => {
    import("../../assets/menu/" + props.image).then((image) => {
        setImage(image.default);
    });
  }, [])

  return (
      <a className="menuLink" href={"#"+props.href}>
        <div className={styles.wrapper}>
            <div className={styles.imgHolder}>
                <img src={image} alt="" />
            </div>
            <CircleSvg className={styles.circle}></CircleSvg>
            <p className={styles.number}>{props.number}</p>
            <p className={styles.text}>{props.text}</p>
        </div>
      </a>
  );
}

export default MenuCircleTab;

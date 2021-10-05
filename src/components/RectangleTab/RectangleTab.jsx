import { useState, useEffect } from "react";

import styles from "./RectangleTab.module.scss";

//Images
import { ReactComponent as MenuSvg } from '../../images/menu.svg';


function RectangleTab(props) {
    
  const [image, setImage] = useState("")  

  useEffect(() => {
    import("../../assets/menu/" + props.image).then((image) => {
        setImage(image.default);
    });
  }, [])

  return (
    <div className={styles.wrapper}>
        <div className={styles.tabText}>
            <p>{props.first_line}</p>
            <br />
            <p>{props.second_line}</p>
            <div className={styles.upperLine}></div>
        </div>
        <div className={styles.imgHolder}>
            <img src={image} alt="" />
        </div>
        <div className={styles.bottomLine}></div>
    </div>
  );
}

export default RectangleTab;

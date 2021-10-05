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
        <p className={styles.tabText}>
            {props.first_line}
            <br />
            {props.second_line}
            <div className={styles.upperLine}></div>
        </p>
        <div className={styles.imgHolder}>
            <img src={image} alt="" />
        </div>
        <div className={styles.bottomLine}></div>
    </div>
  );
}

export default RectangleTab;

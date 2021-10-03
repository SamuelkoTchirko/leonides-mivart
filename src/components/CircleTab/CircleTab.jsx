import { useState, useEffect } from "react";

import styles from "./CircleTab.module.scss";

//Images
import { ReactComponent as CircleSvg } from '../../images/circle.svg';


function CircleTab(props) {
    
  const [image, setImage] = useState("")  

  useEffect(() => {
    import("../../assets/menu/" + props.image).then((image) => {
        setImage(image.default);
    });
  }, [])

  return (
    <div className={styles.wrapper}>
        <p>
            { props.first_line }
            <br />
            { props.second_line }
            { props.second_line == "" ? <></> : <div className={styles.upperLine}></div>}
        </p>
        <div className={styles.imgHolder}>
            <img src={image} alt="" />
        </div>
        <CircleSvg className={styles.circle}></CircleSvg>
    </div>
  );
}

export default CircleTab;

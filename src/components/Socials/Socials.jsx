import { useState } from "react";

import styles from "./Socials.module.scss";

function Socials() {

  return (
    <>
      <div className={styles.wrapper}>
          <div className={styles.column}>
            <div className={styles.square1}>
                <i>f</i>
            </div>
            <div className={styles.square2}>
                <i>t</i>
            </div>
            <div className={styles.square3}>
                <i>g</i>
            </div>
          </div>
      </div>
    </>
  );
}

export default Socials;

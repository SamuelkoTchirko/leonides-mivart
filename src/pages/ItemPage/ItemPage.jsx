import styles from "./ItemPage.module.scss"

function ItemPage() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.firstItem}>
            <div className={styles.leftPanel}>

            </div>
            <h2>ZMEŇ SVOJ ŽIVOT  V SPOLOČENSKOM POSTAVENÍ</h2>
            <div className={styles.rightPanel}>

            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.secondItem}>
                    <div className={styles.leftPanel}>

                    </div>
                    <h2>ZMEŇ SVOJ ŽIVOT  VO SVOJEJ KARIÉRE</h2>
                    <div className={styles.rightPanel}>

                    </div>
                </div>
                <div className={styles.thirdItem}>
                    <div className={styles.leftPanel}>

                    </div>
                    <h2>ZMEŇ SVOJ ŽIVOT  S FINANČNOU NEZÁVISLOSŤOU</h2>
                    <div className={styles.rightPanel}>

                    </div>
                </div>
            </div>
            <div className={styles.fourthItem}>
                <div className={styles.leftPanel}>

                </div>
                <h2>ZMEŇ SVOJ ŽIVOT  VO VZDELÁVANÍ</h2>
                <div className={styles.rightPanel}>

                </div>
            </div>
        </div>
    </div>
  );
}

export default ItemPage;

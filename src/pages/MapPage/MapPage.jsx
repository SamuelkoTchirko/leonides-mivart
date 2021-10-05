import { useEffect, useRef } from "react"

import styles from "./MapPage.module.scss"

import Map from "../../components/Map/Map"

//import ReactDependentScript from "react-dependent-script";

function MapPage() {

  return (
    <div className={styles.wrapper}>
      <Map></Map>
    </div>
  );
}

export default MapPage;

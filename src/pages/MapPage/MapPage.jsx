import { useEffect, useRef } from "react"

import styles from "./MapPage.module.scss"

import Map from "../../components/Map/Map"

import ReactDependentScript from "react-dependent-script";

function MapPage() {

  return (
    <div className={styles.wrapper}>
      <ReactDependentScript
      scripts={[
        "https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"
      ]}
      >
      <Map></Map>
      </ReactDependentScript>
    </div>
  );
}

export default MapPage;

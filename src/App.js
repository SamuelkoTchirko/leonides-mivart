import React, { useRef, useState, useEffect } from 'react';

import handleViewport from 'react-in-viewport';
import { useInViewport } from 'react-in-viewport';

import styles from './App.module.scss';

//Page imports
import LandingPage from "./pages/LandingPage/LandingPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import OfferPage from "./pages/OfferPage/OfferPage"
import ItemPage from "./pages/ItemPage/ItemPage"
import NeedsPage from "./pages/NeedsPage/NeedsPage"
import TransformPage from "./pages/TransformPage/TransformPage"
import PartnersPage from "./pages/PartnersPage/PartnersPage"
import MapPage from "./pages/MapPage/MapPage"
import ContactPage from "./pages/ContactPage/ContactPage"

//Component imports
import Navigation from "./components/Navigation/Navigation"
import Socials from "./components/Socials/Socials"

function App() {

  return (
    <div className={styles.app}>
      <Navigation className={styles.navigation} />
      <LandingPage />
      <AboutPage id="about"/>
      <ItemPage />
      <OfferPage id="offer"/>
      <NeedsPage id="needs"/>
      <TransformPage id="transform"/>
      <PartnersPage id="partners"/>
      <MapPage />
      <ContactPage />
      <Socials />
    </div>
  );
}

export default App;

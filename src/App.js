import styles from './App.module.scss';

//Page imports
import LandingPage from "./pages/LandingPage/LandingPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ItemPage from "./pages/ItemPage/ItemPage"
import NeedsPage from "./pages/NeedsPage/NeedsPage"

//Component imports
import Navigation from "./components/Navigation/Navigation"

function App() {
  return (
    <div className={styles.app}>
      <Navigation className={styles.navigation}/>
      <LandingPage />
      <AboutPage />
      <ItemPage />
      <NeedsPage />
    </div>
  );
}

export default App;

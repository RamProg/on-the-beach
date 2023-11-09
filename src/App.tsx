import CardsContainer from "./components/CardsContainer";
import SortBarContainer from "./components/SortBarContainer";
import styles from "./App.module.css";
import { SortProvider } from "./hooks/useSort/useSort";

function App() {
  return (
    <SortProvider>
      <div className={styles.appContainer} data-testid="app-container">
        <SortBarContainer  />
        <div className={styles.spacer} data-testid="app-container-spacer" />
        <CardsContainer />
      </div>
    </SortProvider>
  );
}

export default App;

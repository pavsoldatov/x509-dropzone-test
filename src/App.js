import ASN1 from "@lapo/asn1js";

import Card from "./components/UI/Card";
import Main from "./components/Layout/Main";
import CardContent from "./components/Layout/CardContent";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Main>
        <Card>
          <CardContent />
        </Card>
      </Main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;

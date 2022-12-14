import React from 'react';

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
      <footer></footer>
    </div>
  );
}

export default App;

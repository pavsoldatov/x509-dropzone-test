import styles from "./CardContent.module.css";
import Aside from "../UI/Aside";
import Dropzone from "../UI/Dropzone";
import * as x509 from "@peculiar/x509";
import Output from "../UI/Output";

import { useState } from "react";

const CardContent = (props) => {
  const [addIsActive, setAddIsActive] = useState(true);
  const toggleAddButton = () => setAddIsActive((prevState) => !prevState);

  const [payload, setPayload] = useState([]);
  const getPayload = (payload) => setPayload(payload);

  return (
    <section className={styles.CardContent}>
      <Aside
        onAddClick={toggleAddButton}
        addIsActive={addIsActive}
        payload={payload}
      />
      {addIsActive ? <Dropzone onSetPayload={getPayload} /> : <Output />}
    </section>
  );
};

export default CardContent;

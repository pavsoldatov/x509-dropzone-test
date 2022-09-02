import styles from "./CardContent.module.css";
import Aside from "../UI/Aside";
import Dropzone from "../UI/Dropzone";
import * as x509 from "@peculiar/x509";

import { useState } from "react";

const CardContent = (props) => {
  const [commonNames, setCommonName] = useState([]);
  const addCommonName = (cn) => {
    return setCommonName((prevState) => [...prevState, cn]);
  };
  const [addIsActive, setAddIsActive] = useState(true);
  const toggleAddButton = () => setAddIsActive((prevState) => !prevState);

  const [payload, setPayload] = useState([]);
  const getPayload = (p) => {
    return setPayload((prev) => [...prev, p]);
  };

  return (
    <section className={styles.CardContent}>
      <Aside
        commonNames={commonNames}
        onAddClick={toggleAddButton}
        addIsActive={addIsActive}
        payload={payload}
      />
      {addIsActive ? (
        <Dropzone
          onAddCommonName={addCommonName}
          onSetPayload={getPayload}
          onResetPayload={setPayload}
        />
      ) : (
        <output style={{ border: "2px solid #333" }}>This is output</output>
      )}
    </section>
  );
};

export default CardContent;

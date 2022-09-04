import styles from "./CardContent.module.css";
import Aside from "../UI/Aside";
import Dropzone from "../UI/Dropzone";
import * as x509 from "@peculiar/x509";
import Output from "../UI/Output";

import { useState } from "react";

const CardContent = (props) => {
  const [addIsActive, setAddIsActive] = useState(true);

  const [payload, setPayload] = useState([]);
  const getPayload = (payload) => setPayload(payload);

  const [selectedItem, setSelectedItem] = useState();
  const getSelectedListItem = (listItem) => setSelectedItem(listItem);

  return (
    <section className={styles.CardContent}>
      <Aside
        onAddClick={setAddIsActive}
        addIsActive={addIsActive}
        payload={payload}
        onLiftUpListItem={getSelectedListItem}
      />
      {addIsActive ? (
        <Dropzone onSetPayload={getPayload} />
      ) : (
        <Output
          selectedItem={selectedItem}
          addIsActive={addIsActive}
        />
      )}
    </section>
  );
};

export default CardContent;

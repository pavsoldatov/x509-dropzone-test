import styles from "./Aside.module.css";

import React from "react"
import CertificateList from "../CertificatesList";
import AddButton from "./AddButton";

const Aside = (props) => {

  const liftUpSelectedItem = (listItem) => props.onLiftUpSelectedItem(listItem);

  return (
    <aside className={styles.Aside}>
      <CertificateList
        payload={props.payload}
        onLiftUpSelectedItem={liftUpSelectedItem}
        onAddClick={props.onAddClick}
      />
      <AddButton
        addIsActive={props.addIsActive}
        onAddClick={props.onAddClick}
      />
    </aside>
  );
};

export default Aside;

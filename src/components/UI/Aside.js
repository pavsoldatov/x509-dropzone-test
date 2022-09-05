import styles from "./Aside.module.css";

import React from "react"
import CertificateList from "../CertificatesList";
import AddButton from "./AddButton";

const Aside = (props) => {

  const liftUpListItem = (listItem) => props.onLiftUpListItem(listItem);

  return (
    <aside className={styles.Aside}>
      <CertificateList
        payload={props.payload}
        onLiftUpListItem={liftUpListItem}
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

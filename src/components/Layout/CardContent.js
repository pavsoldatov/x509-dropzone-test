import React from "react";
import { useState, useEffect } from "react";
import Aside from "../UI/Aside";
import Dropzone from "../UI/Dropzone";
import Output from "../UI/Output";
import styles from "./CardContent.module.css";

const CardContent = () => {
  const [addIsActive, setAddIsActive] = useState(true);

  const initialValue = () => {
    const localData = localStorage.getItem("certificates");
    return localData ? JSON.parse(localData) : [];
  };

  const [payload, setPayload] = useState(initialValue);
  const getPayload = (dropzonePayload) => {
    setPayload((prevState) => {
      const serialNums = new Set(prevState.map((cert) => cert.serialNumber));
      return [
        ...prevState,
        ...dropzonePayload.filter((cert) => !serialNums.has(cert.serialNumber)),
      ]; // merges without duplicates
    });
  };

  const [selectedItem, setSelectedItem] = useState();
  const getSelectedListItem = (listItem) => setSelectedItem(listItem);

  useEffect(() => {
    localStorage.setItem("certificates", JSON.stringify(payload));
  }, [payload]);

  return (
    <section className={styles.CardContent}>
      <Aside
        onAddClick={setAddIsActive}
        addIsActive={addIsActive}
        payload={payload}
        onLiftUpSelectedItem={getSelectedListItem}
      />
      {addIsActive ? (
        <Dropzone onSetPayload={getPayload} />
      ) : (
        <Output selectedItem={selectedItem} addIsActive={addIsActive} />
      )}
    </section>
  );
};

export default CardContent;

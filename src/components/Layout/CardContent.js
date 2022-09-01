import styles from "./CardContent.module.css";
import Aside from "../UI/Aside";
import Dropzone from "../UI/Dropzone";
import { useState } from "react";

const CardContent = (props) => {
  const [commonNames, setCommonName] = useState([]);
  const addCommonName = (cn) => {
    return setCommonName((prevState) => [...prevState, cn]);
  };
  const [addIsActive, setAddIsActive] = useState(false);
  const toggleAddButton = () => setAddIsActive((prevState) => !prevState);

  return (
    <section className={styles.CardContent}>
      <Aside
        commonNames={commonNames}
        onAddClick={toggleAddButton}
        addIsActive={addIsActive}
      />
      {addIsActive ? (
        <Dropzone onAddCommonName={addCommonName} />
      ) : (
        <output style={{ border: "2px solid #333" }}>This is output</output>
      )}
    </section>
  );
};

export default CardContent;

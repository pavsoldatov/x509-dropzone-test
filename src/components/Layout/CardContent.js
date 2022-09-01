import styles from "./CardContent.module.css";
import Aside from "../UI/Aside";
import Dropzone from "../UI/Dropzone";
import {useState} from "react";

const CardContent = (props) => {
  const [certs, setCerts] = useState([])

  const updateCerts = (cert) => {
    return setCerts(prevState => [...prevState, cert])
  }

  console.log(certs)
  
  return (
    <section className={styles.CardContent}>
      <Aside />
      <Dropzone onAddCerts={updateCerts}/>
    </section>
  );
};

export default CardContent;

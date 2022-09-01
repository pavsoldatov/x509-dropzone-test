import styles from "./Aside.module.css";

import CertificateList from "../CertificatesList";

const Aside = (props) => {
  return (
    <aside className={styles.Aside}>
      <CertificateList />
      <button style={{padding: "6px 0", width: "70%", margin: "0 auto"}}>hello</button>
    </aside>
  );
};

export default Aside;

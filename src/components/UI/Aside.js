import styles from "./Aside.module.css";

import CertificateList from "../CertificatesList";
import AddButton from "./AddButton";

const Aside = (props) => {
  return (
    <aside className={styles.Aside}>
      <CertificateList />
      <AddButton />
    </aside>
  );
};

export default Aside;

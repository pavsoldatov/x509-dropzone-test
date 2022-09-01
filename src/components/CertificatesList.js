import styles from "./CertificateList.module.css";

const CertificateList = () => {
  return (
    <select className={styles.select} size="2" >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  );
};

export default CertificateList;

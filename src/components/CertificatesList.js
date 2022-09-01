import styles from "./CertificateList.module.css";

const CertificateList = ({ commonNames, ...props }) => {
  const mappedCommonNames = commonNames.map((commonName) => {
    const timeKey = new Date().getTime() * Math.random() * 100000;
    return <option key={timeKey}>{commonName};</option>;
  });

  return (
    <select className={styles.select} size="2">
      {mappedCommonNames}
    </select>
  );
};

export default CertificateList;

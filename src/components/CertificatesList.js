import styles from "./CertificateList.module.css";

const CertificateList = ({ commonNames, payload, ...props }) => {
  const mappedCNs = payload.map((payloadItem) => {
    const key = payloadItem.serialNumber;
    const subjectCommonName = payloadItem.subjectCN;

    return <option key={key}>{subjectCommonName}</option>;
  });

  return (
    <select className={styles.select} size="2">
      {mappedCNs}
    </select>
  );
};

export default CertificateList;

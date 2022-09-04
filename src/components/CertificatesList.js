import styles from "./CertificateList.module.css";

const CertificateList = ({ payload, ...props }) => {
  const commonNames = payload.map((payloadItem) => {
    const key = payloadItem.serialNumber;
    const subjectCommonName = payloadItem.subjectCN;

    const handleClick = () => {
      props.onAddClick(false);
      props.onLiftUpListItem(payloadItem);
    };

    return (
      <option onClick={handleClick} key={key}>
        {subjectCommonName}
      </option>
    );
  });

  return (
    <select className={styles.select} size="2">
      {commonNames}
    </select>
  );
};

export default CertificateList;

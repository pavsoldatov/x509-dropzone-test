import styles from "./Output.module.css";

const Output = ({ selectedItem, addIsActive, ...props }) => {
  return (
    <output className={styles.Output}>
      {selectedItem ? (
        <ul>
          <li>
            <strong>Реквізити підписувача: </strong>
            {selectedItem.subjectCN}
          </li>
          <li>
            <strong>Найменування Центру: </strong>
            {selectedItem.issuerCN}
          </li>
          <li>
            <strong>Дата початку чинності: </strong>
            {selectedItem.validFrom}
          </li>
          <li>
            <strong>Дата закінчення чинності: </strong>
            {selectedItem.validTill}
          </li>
        </ul>
      ) : (
        <em>Сертифікат не вибрано.</em>
      )}
    </output>
  );
};

export default Output;

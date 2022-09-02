import styles from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <>
      {props.addIsActive ? (
        <button onClick={props.onAddClick} className={styles.AddButton}>
          Скасувати
        </button>
      ) : (
        <button onClick={props.onAddClick} className={styles.AddButton}>
          Додати
        </button>
      )}
    </>
  );
};

export default AddButton;

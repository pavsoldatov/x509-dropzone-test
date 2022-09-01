import styles from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <>
      {props.addIsActive ? (
        <button onClick={props.onAddClick} className={styles.AddButton}>
          Додати
        </button>
      ) : (
        <button onClick={props.onAddClick} className={styles.AddButton}>
          Скасувати
        </button>
      )}
    </>
  );
};

export default AddButton;

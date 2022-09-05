import styles from "./AddButton.module.css";

const AddButton = (props) => {
  const handleClick = () => {
    props.onAddClick((prevState) => !prevState);
  };

  return (
    <>
      {props.addIsActive ? (
        <button onClick={handleClick} className={styles.AddButtonActive}>
          Скасувати
        </button>
      ) : (
        <button onClick={handleClick} className={styles.AddButton}>
          Додати
        </button>
      )}
    </>
  );
};

export default AddButton;

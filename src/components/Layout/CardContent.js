import styles from "./CardContent.module.css";
import Aside from "../UI/Aside";
import Dropzone from "../UI/Dropzone";

const CardContent = (props) => {
  return (
    <section className={styles.CardContent}>
      <Aside />
      <Dropzone />
    </section>
  );
};

export default CardContent;

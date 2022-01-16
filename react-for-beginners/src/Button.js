import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

Button.protoTypes = {
  text: propTypes.string.isRequired,
};

export default Button;

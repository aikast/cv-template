import React from "react";
import styles from "./Button.module.scss";
import "./some-style.css";

class Button extends React.Component {
	render() {
		return (
			<button className={styles.button}>send</button>
		)
	}
}

export default Button;
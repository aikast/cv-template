import {title} from "./Education.module.css";
import React from "react";

class Education extends React.Component {
	render() {
		return (
			<section>
				<h2 className={title}>Education</h2>
				<p>Facility name: {this.props.university}</p>
				<p>Graduaction year: {this.props.graduationYear}</p>
			</section>
		)
	}
}

export default Education;
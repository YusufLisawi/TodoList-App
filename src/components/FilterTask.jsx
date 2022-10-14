import React, { Component } from "react";
import "./styles/filterTask.css";
export default class FilterTask extends Component {
	render() {
		return (
			<div className="filterTask">
				<button
					className="filter__btn"
					onClick={() => this.props.changeMode(1)}
				>
					Tous
				</button>
				<button
					className="filter__btn"
					onClick={() => this.props.changeMode(2)}
				>
					Terminer
				</button>
				<button
					className="filter__btn"
					onClick={() => this.props.changeMode(3)}
				>
					En cours
				</button>
			</div>
		);
	}
}

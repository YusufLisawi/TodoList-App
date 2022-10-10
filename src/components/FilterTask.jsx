import React, { Component } from "react";
import "./styles/filterTask.css";
export default class FilterTask extends Component {
	constructor(props) {
		super(props);
		this.tasks = this.props.tasks;
		this.all = this.tasks;
		this.done = this.tasks.filter((task) => task.completed);
		this.inProgress = this.tasks.filter((task) => !task.completed);
	}
	render() {
		return (
			<div className="filterTask">
				<button
					className="filter__btn"
					onClick={() => this.props.onShow(this.all)}
				>
					All
				</button>
				<button
					className="filter__btn"
					onClick={() => this.props.onShow(this.done)}
				>
					Terminer
				</button>
				<button
					className="filter__btn"
					onClick={() => this.props.onShow(this.inProgress)}
				>
					En cours
				</button>
			</div>
		);
	}
}

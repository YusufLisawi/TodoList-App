import React, { Component } from "react";
import Task from "./Task";
import "./styles/Tasks.css";
export default class Tasks extends Component {
	render() {
		return (
			<div className="tasks">
				{this.props.tasks.map((task) => (
					<Task
						id={task.id}
						key={task.id}
						description={task.description}
						completed={task.completed}
						done={this.props.done}
						continue={this.props.continueTask}
						delete={this.props.deleteTask}
					/>
				))}
			</div>
		);
	}
}

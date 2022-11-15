import React, { Component } from "react";
import Task from "./Task";
import "./styles/Tasks.css";
export default class Tasks extends Component {
	render() {
		const allTasks = this.props.tasks;
		const doneTasks = this.props.tasks.filter((task) => task.completed);
		const onGoingTasks = this.props.tasks.filter((task) => !task.completed);
		let tasks = [];
		if (this.props.mode === 1) tasks = allTasks;
		else if (this.props.mode === 2) tasks = doneTasks;
		else if (this.props.mode === 3) tasks = onGoingTasks;
		return (
			<>
				<div className="tasks">
					{tasks.reverse().map((task) => (
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
			</>
		);
	}
}

import React, { Component } from "react";
import uuid from "react-uuid";
import InputTask from "./InputTask";
import InformationTask from "./InformationTask";
import Tasks from "./Tasks";
import DeleteTasks from "./DeleteTasks";
import FilterTask from "./FilterTask";
import "./styles/ToDoListApp.css";

export default class ToDoListApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			mode: 1,
		};
	}

	componentDidUpdate(prevState) {
		if (prevState.tasks !== this.state.tasks) {
			console.log(this.state.tasks);
		}
	}

	addTask = (description) => {
		this.setState({
			tasks: [
				...this.state.tasks,
				{ id: uuid(), description: description, completed: false },
			],
		});
	};

	doneTask = (id) => {
		const tasks = this.state.tasks;
		const taskDone = tasks.find((task) => task.id === id);
		taskDone.completed = true;
		this.setState({ tasks: tasks });
	};

	continueTask = (id) => {
		const tasks = this.state.tasks;
		const taskToContinue = tasks.find((task) => task.id === id);
		taskToContinue.completed = false;
		this.setState({ tasks: tasks });
	};

	deleteTask = (id) => {
		const tasks = this.state.tasks;
		const newTasks = tasks.filter((task) => task.id !== id);
		this.setState({ tasks: newTasks });
	};

	deleteAll = () => {
		this.setState({ tasks: [] });
	};

	deleteDone = () => {
		this.setState({
			tasks: this.state.tasks.filter((task) => !task.completed),
		});
	};

	changeMode = (mode) => {
		this.setState({
			mode: mode,
		});
	};

	render() {
		return (
			<div className="todoList">
				<InputTask onInputSubmit={this.addTask} />
				<InformationTask tasks={this.state.tasks} />
				<FilterTask
					tasks={this.state.tasks}
					changeMode={this.changeMode}
				/>
				<Tasks
					mode={this.state.mode}
					tasks={this.state.tasks}
					done={this.doneTask}
					continueTask={this.continueTask}
					deleteTask={this.deleteTask}
				/>
				<DeleteTasks
					onDeleteAll={this.deleteAll}
					onDeleteDone={this.deleteDone}
				/>
			</div>
		);
	}
}

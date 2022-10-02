import React, { Component } from 'react'
import InputTask from "./InputTask"

export default class ToDoListApp extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: [],
		}
	}

	addTask = (e, description) => {
		e.preventDefault()
		if (description !== "")
				this.setState({
				tasks : [...this.state.tasks, {description: description, completed: false}]
			});
		console.log(this.state);
	}
	render() {
		return (
		<div className="todoList">
			{/*
				InputTask
				InformationTask
				FilterTask
				Tasks
				DeleteTask
			*/}

			<InputTask onSubmit={this.addTask}/>

		</div>
		)
	}
}

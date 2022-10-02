import React, { Component } from 'react'
import InputTask from "./InputTask"
import InformationTask from "./InformationTask"
import FilterTask from "./FilterTask"
import Tasks from "./Tasks"

export default class ToDoListApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			tasks: [],
		}
	}

	changeState = (value) => {
		this.setState({
			tasks: value,
		})
	}

	addTask = (e, description) => {
		e.preventDefault()
		if (description !== "")
				this.setState({
				tasks : [...this.state.tasks, {description: description, completed: false}]
			});
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
			<InformationTask tasks={this.state.tasks}/>
			<FilterTask tasks={this.state.tasks} changeState={this.changeState}/>
			<Tasks tasks={this.state.tasks} changeState={this.changeState}/>
		</div>
		)
	}
}

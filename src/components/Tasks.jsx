import React, { Component } from 'react'
import Task from "./Task"

export default class Tasks extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: this.props.tasks,
		}
		this.changeState = this.props.changeState.bind(this)
	}
	render() {
		console.log(this.state.tasks)
	return (
		<div className="tasks">
			{
			this.state.tasks.map((task) => (
			<Task description={task.description} completed={task.completed}/>
			))
			}
		</div>
	)
	}
}

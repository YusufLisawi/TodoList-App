import React, { Component } from 'react'
import "./Task.css"
export default class Task extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: this.props.tasks,
		}
	}
	render() {
	return (
		<div className="task">
			<h2 className={this.props.completed && "done"}>{this.props.description}</h2>
		</div>
	)
	}
}

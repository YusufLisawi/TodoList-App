import React, { Component } from 'react'

export default class FilterTask extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: this.props.tasks,
		}
		this.changeState = this.props.changeState.bind(this)
	}

  render() {
	return (
	  <div className="filterTask">
			<button className="filter__btn" onClick={
				() => {
					this.setState({tasks : this.props.tasks})
					this.changeState(this.state.tasks)
				}
				}>
				All
			</button>
			<button className="filter__btn" onClick={
				() => {
					this.setState({tasks : this.props.tasks.filter(item => item.completed)})
					this.changeState(this.state.tasks)
				}
				}>
				Terminer
			</button>
			<button className="filter__btn" onClick={
				() => {
					this.setState({tasks : this.props.tasks.filter(item => !item.completed)})
					this.changeState(this.state.tasks)
				}
				}>
				En cours
			</button>
		</div>
	)
  }
}

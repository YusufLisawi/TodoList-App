import React, { Component } from "react";
import "./styles/DeleteTask.css";

export default class DeleteTasks extends Component {
	render() {
		return (
			<div className="deletetasks">
				<button
					onClick={() => {
						window.confirm("Are you sure?") &&
							this.props.onDeleteAll();
					}}
				>
					Supprimer tous
				</button>
				<button
					onClick={() =>
						window.confirm("Are you sure?") &&
						this.props.onDeleteDone()
					}
				>
					Supprimer Termine
				</button>
			</div>
		);
	}
}

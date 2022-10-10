import React, { Component } from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./Task.css";
export default class Task extends Component {
	render() {
		return (
			<div className="task">
				<h3 className={this.props.completed ? "done" : ""}>
					{this.props.description}
				</h3>
				<div className="task_btns">
					<button onClick={() => this.props.done(this.props.id)}>
						<DoneOutlinedIcon />
					</button>
					<button onClick={() => this.props.continue(this.props.id)}>
						<RotateLeftOutlinedIcon />
					</button>
					<button
						onClick={() =>
							window.confirm("Are you sure?") &&
							this.props.delete(this.props.id)
						}
					>
						<DeleteOutlineOutlinedIcon />
					</button>
				</div>
			</div>
		);
	}
}

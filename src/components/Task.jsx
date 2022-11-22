import React from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./Task.css";
import { useDispatch } from "react-redux";
import {
	constinueTask,
	deleteTask,
	doneTask,
} from "../features/ActionsCreators";
export default function Task({ id, description, completed }) {
	const dispatch = useDispatch();
	return (
		<div className="task">
			<h3 className={completed ? "done" : ""}>{description}</h3>
			<div className="task_btns">
				<button onClick={() => dispatch(doneTask(id))}>
					<DoneOutlinedIcon />
				</button>
				<button onClick={() => dispatch(constinueTask(id))}>
					<RotateLeftOutlinedIcon />
				</button>
				<button
					onClick={() =>
						window.confirm("Are you sure?") &&
						dispatch(deleteTask(id))
					}
				>
					<DeleteOutlineOutlinedIcon />
				</button>
			</div>
		</div>
	);
}

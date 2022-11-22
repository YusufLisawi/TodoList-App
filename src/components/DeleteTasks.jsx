import React from "react";
import { useDispatch } from "react-redux";
import "./styles/DeleteTask.css";

export default function DeleteTasks() {
	const dispatch = useDispatch();
	return (
		<div className="deletetasks">
			<button
				onClick={() => {
					window.confirm("Are you sure?") &&
						dispatch({ type: "DELETE_ALL" });
				}}
			>
				Supprimer tous
			</button>
			<button
				onClick={() =>
					window.confirm("Are you sure?") &&
					dispatch({ type: "DELETE_DONE" })
				}
			>
				Supprimer Termine
			</button>
		</div>
	);
}

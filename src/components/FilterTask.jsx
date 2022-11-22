import React from "react";
import { useDispatch } from "react-redux";
import "./styles/filterTask.css";
export default function FilterTask() {
	const dispatch = useDispatch();
	return (
		<div className="filterTask">
			<button
				className="filter__btn"
				onClick={() => dispatch({ type: "SET_MODE", payload: 1 })}
			>
				Tous
			</button>
			<button
				className="filter__btn"
				onClick={() => dispatch({ type: "SET_MODE", payload: 2 })}
			>
				Terminer
			</button>
			<button
				className="filter__btn"
				onClick={() => dispatch({ type: "SET_MODE", payload: 3 })}
			>
				En cours
			</button>
		</div>
	);
}

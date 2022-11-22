import React from "react";
import { useSelector } from "react-redux";
import "./styles/informationTask.css";

export default function InformationTask() {
	const tasks = useSelector((state) => state.tasks);
	return (
		<div className="informationTask">
			<div className="tasks__stats">
				<span>Nombre Totale</span>
				<span>{tasks.length}</span>
			</div>
			<div className="tasks__stats">
				<span>Nombre Terminer</span>
				<span>{tasks.filter((task) => task.completed).length}</span>
			</div>
			<div className="tasks__stats">
				<span>Nombre En cours</span>
				<span>{tasks.filter((task) => !task.completed).length}</span>
			</div>
		</div>
	);
}

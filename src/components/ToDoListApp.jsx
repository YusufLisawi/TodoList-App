import React from "react";
import InputTask from "./InputTask";
import InformationTask from "./InformationTask";
import Tasks from "./Tasks";
import DeleteTasks from "./DeleteTasks";
import FilterTask from "./FilterTask";
import "./styles/ToDoListApp.css";

export default function ToDoListApp() {
	return (
		<div className="todoList">
			<InputTask />
			<InformationTask />
			<FilterTask />
			<Tasks />
			<DeleteTasks />
		</div>
	);
}

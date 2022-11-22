import React from "react";
import Task from "./Task";
import "./styles/Tasks.css";
import { useSelector } from "react-redux";
export default function Tasks() {
	const tasks = useSelector((state) => state.tasksToBeShown);
	return (
		<>
			<div className="tasks">
				{tasks.map((task) => (
					<Task
						id={task.id}
						key={task.id}
						description={task.description}
						completed={task.completed}
					/>
				))}
			</div>
		</>
	);
}

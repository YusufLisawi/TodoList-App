export const addTask = (task) => {
	return {
		type: "ADD",
		payload: task,
	};
};
export const deleteTask = (id) => {
	return {
		type: "DELETE",
		payload: id,
	};
};

export const doneTask = (id) => {
	return {
		type: "DONE_TASK",
		payload: id,
	};
};
export const constinueTask = (id) => {
	return {
		type: "CONTINUE_TASK",
		payload: id,
	};
};

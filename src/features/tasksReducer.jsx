const initialState = {
	tasks: [],
	tasksToBeShown: [],
};

export const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
			return {
				...state,
				tasks: [action.payload, ...state.tasks],
				tasksToBeShown: [action.payload, ...state.tasks],
			};
		case "DELETE":
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload),
				tasksToBeShown: state.tasks.filter(
					(task) => task.id !== action.payload
				),
			};
		case "DONE_TASK":
			const newTasks = [...state.tasks];
			let task = newTasks.find((task) => task.id === action.payload);
			task.completed = true;
			return {
				...state,
				tasks: newTasks,
				tasksToBeShown: newTasks,
			};
		case "CONTINUE_TASK":
			const newTasks2 = [...state.tasks];
			let task2 = newTasks2.find((task) => task.id === action.payload);
			task2.completed = false;
			return {
				...state,
				tasks: newTasks2,
				tasksToBeShown: newTasks2,
			};
		case "DELETE_ALL":
			return { ...state, tasks: [], tasksToBeShown: [] };
		case "DELETE_DONE":
			return {
				...state,
				tasks: state.tasks.filter((task) => task.completed === false),
				tasksToBeShown: state.tasks.filter(
					(task) => task.completed === false
				),
			};
		case "SET_MODE":
			switch (action.payload) {
				case 1:
					return { ...state, tasksToBeShown: state.tasks };
				case 2:
					return {
						...state,
						tasksToBeShown: state.tasks.filter(
							(t) => t.completed === true
						),
					};
				case 3:
					return {
						...state,
						tasksToBeShown: state.tasks.filter(
							(t) => t.completed === false
						),
					};
				default:
					return state;
			}
		default:
			return state;
	}
};

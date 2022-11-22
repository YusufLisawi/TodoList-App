import { createStore } from "redux";
import { tasksReducer } from "./tasksReducer";

const store = createStore(tasksReducer);

export default store;

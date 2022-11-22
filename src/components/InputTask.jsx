import React, { useRef } from "react";
import uuid from "react-uuid";
import AddIcon from "@mui/icons-material/Add";
import "./styles/InputTask.css";
import "./styles/ToDoListApp.css";
import { InputTaskStyled } from "./styles/InputTask.styled";
import { useDispatch } from "react-redux";
import { addTask } from "../features/ActionsCreators";
export default function InputTask() {
	const dispatch = useDispatch();
	const inputRef = useRef();
	return (
		<InputTaskStyled>
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
					if (inputRef.current.value !== "") {
						dispatch(
							addTask({
								id: uuid(),
								description: inputRef.current.value,
								completed: false,
							})
						);
						inputRef.current.value = "";
					}
				}}
			>
				<input
					type="text"
					placeholder="Saisir une tache..."
					ref={inputRef}
				/>
				<button>
					<AddIcon />
				</button>
			</form>
		</InputTaskStyled>
	);
}

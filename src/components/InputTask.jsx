import React, { Component } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./styles/InputTask.css";
import "./styles/ToDoListApp.css";
import { InputTaskStyled } from "./styles/InputTask.styled";
export default class InputTask extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}
	render() {
		return (
			<InputTaskStyled>
				<form
					action=""
					onSubmit={(e) => {
						e.preventDefault();
						if (this.inputRef.current.value !== "") {
							this.props.onInputSubmit(
								this.inputRef.current.value
							);
							this.inputRef.current.value = "";
						}
					}}
				>
					<input
						type="text"
						placeholder="Saisir une tache..."
						onChange={(e) =>
							this.setState({ description: e.target.value })
						}
						ref={this.inputRef}
					/>
					<button>
						<AddIcon />
					</button>
				</form>
			</InputTaskStyled>
		);
	}
}

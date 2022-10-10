import styled from "styled-components";

export const InputTaskStyled = styled.div`
	margin-bottom: 15px;
	form {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	input {
		padding: 13px 15px;
		font-size: 16px;
		flex: 1;
		outline: none;
		border: none;
		border-radius: 50px;
		border: 2px solid #3d8361;
		transition: 100ms linear all;
		&:focus {
			border-color: #0f3d3e;
		}
	}
	button {
		display: flex;
		align-items: center;
		cursor: pointer;
		border: none;
		background: #0f3d3e;
		color: white;
		padding: 10px;
		border-radius: 50px;
		transition: 100ms linear all;
		&:hover {
			background: #181818;
		}
	}
`;

import React, { Component } from 'react'
import AddIcon from '@mui/icons-material/Add';

export default class InputTask extends Component {
	constructor(props){
		super(props);
		this.state = {
			description: "",
		}
		this.onSubmit = this.props.onSubmit.bind(this)
	}
	render() {
	return (
	  <div className="inputTask">
		 <form action="" onSubmit={(e) => this.onSubmit(e, this.state.description)}>
				<input type="text" placeholder="Saisir une tache..." onChange={e => (this.setState({description: e.target.value}))}/>
				<button>
					<AddIcon />
				</button>
		 </form>
	  </div>
	)
  }
}

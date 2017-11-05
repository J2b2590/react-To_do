import React, { Component } from 'react';

class Form extends Component{

	constructor(props){
		super(props);

		this.state = {
			inputValue: ''
		}
	}
	


	handleForm = (e) =>{
		const state = this.state;
		state[e.target.name] = e.currentTarget.value;
		this.setState(state)
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addToList(this.state.inputValue)
		const state = this.state;
		state.inputValue = '';
		this.setState(state);

	}

	


	render(){
		return(
			<div>
			<form>
			<h1>This is the To-Do list</h1>
			<textarea name="inputValue" type="text" placeholder=" what to do" onChange={this.handleForm} value={this.state.inputValue}/>
			<button onClick={this.handleSubmit}>Add To-Do</button>
			</form>
			</div>


			)
	}
}







export default Form;
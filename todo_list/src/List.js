import React, { Component} from 'react';

class List extends Component{




	render(){

		const toDo = this.props.list.map((item, i) =>{
			return <li key={i} onClick={this.props.crossOff}>{item}</li>
		})
		
		return(
			<div>
				

				{toDo}
			</div>
			)
	}
}




export default List;
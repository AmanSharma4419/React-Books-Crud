import React from 'react';

import '../App.css';

class Createarticle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: ''
		};
	}
	updateState = (event) => {
		this.setState({ author: event.target.value });
	};

	toCreate = () => {
		var data = { author: this.state.author };
		fetch('http://localhost:4000/api/Books/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(data)
		})
			//  .then(console.log(data))
			//.then(res => res.json()).then(mydata => console.log(mydata))
			.then((data) => this.props.history.push('/ReadArticle'));
	};

	render() {
		return (
			<React.Fragment>
				<div className="Children">
					<h1>{this.props.author}</h1>
					<button onClick={this.props.type === 'Create' ? this.toCreate : this.toUpdate}>
						{this.props.type}
					</button>
					<input
						type="text"
						name="author"
						placeholder={
							this.props.Heading === 'CreateArticle' ? this.props.Placeholder1 : this.props.Placeholder2
						}
						value={this.state.author}
						onChange={this.updateState}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default Createarticle;

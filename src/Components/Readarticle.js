import React from 'react';
import { Link } from 'react-router-dom';
// import Axios from "axios"
import '../App.css';
class Readarticle extends React.Component {
	constructor() {
		super();
		this.state = {
			Bookstore: ''
		};
	}

	componentDidMount() {
		fetch('http://localhost:4000/api/Books/read', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true
			}
		})
			.then((res) => res.json())
			.then((User) => {
				let bookStore = User.Books;
				console.log(bookStore);
				this.setState({ ...this.state, Bookstore: bookStore }, () => {
					console.log(this.state.Bookstore);
				});
			});
	}
	// toUpdate = () => {
	// 	var data = { author: this.state.readArticle };
	// 	fetch(`http://localhost:4000/api/Books/update/${this.state.}`, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(data)
	// 	}).then(console.log(data));
	// };

	render() {
		console.log(this.state.Bookstore);
		return (
			<React.Fragment>
				<h1>Article Read Below!</h1>
				{this.state.Bookstore &&
					this.state.Bookstore.map((article, index) => {
						return (
							<div key={index} className="Children">
								<h2>
									<span>Title:</span>
									{article.title}
								</h2>

								<h2>
									<span>_Id:</span>
									{article._id}
								</h2>

								<h2>
									<span>Author:</span>
									{article.author}
								</h2>
								<button>
									<Link to={{pathname: '/UpdateArticle', article:article}}>Update
									</Link>
								</button>
								<hr />
							</div>
						);
					})}
			</React.Fragment>
		);
	}
}

export default Readarticle;

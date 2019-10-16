import React from "react";
class updateArticle extends  React.Component {
constructor(props) {
    super(props) 
    this.state = {
        // author:this.props.location.article.author,
        updateArticle:""
    }
}
// componentDidMount() {
//     fetch(`http://localhost:4000/api/Books/read/${this.props.location.id}`)
//     .then(res => res.json())
//     // .then(Article => console.log(Article))
// }

updateState = (event) => {
    this.setState({ author: event.target.value });
};

handleUpdate = (id) => {
		var data = { author: this.state.author };
		fetch(`http://localhost:4000/api/Books/update/${id}`, {
			method: 'PUT',
			headers: {
				'content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(console.log(data));
    };
    
render() {
    var article = (this.props.location.article)
    return (
        <React.Fragment>
           <input
						type="text"
						name="author"
						value={this.state.author}
						onChange={this.updateState}
					/>
            <button onClick={()=>{this.handleUpdate(article._id)}}>update</button>
        </React.Fragment>
    )
}
}

export default updateArticle
import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  handleInputChange = event => {
    event.persist();
    this.setState(prev => ({
      ...prev, ...{
        [event.target.name]: event.target.value
      }
    }
    ));
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString()
    }

    this.setState({ title: '' });

    console.log(newPost);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Headline of Post</label>
          <input
            type="type"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
          />
        </div>
        <button className="btn btn-success" type="submit">Create</button>
      </form>
    );
  }
}
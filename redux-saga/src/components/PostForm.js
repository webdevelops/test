import React from 'react';
import { connect } from 'react-redux';

import { createPost, showAlert } from '../redux/actions'
import { Alert } from './Alert';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      warning: null
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

    if (!title.trim()) {
      return this.props.showAlert('Post title cannot be empty');
    }

    const newPost = {
      title,
      id: Date.now().toString()
    }

    this.props.createPost(newPost);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.alert && <Alert text={this.props.alert} />}

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

const mapStateToProps = state => {
  return { alert: state.app.alert };
};

const mapDispatchToProps = {
  createPost,
  showAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
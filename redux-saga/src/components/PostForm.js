import React from 'react';
import { connect } from 'react-redux';

import {createPost, showAlert} from '../redux/actions'
import { Warning } from './Alerts';

class PostForm extends React.Component {
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

    if (!title.trim()) {
      // this.props.showAlert();
      return <Warning />
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

const mapDispatchToProps = {
  createPost,
  showAlert
}

export default connect(null, mapDispatchToProps)(PostForm);
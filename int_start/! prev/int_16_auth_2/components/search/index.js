import React, { Component } from 'react'
import { connect } from 'react-redux'

import {searchPhone} from 'actions'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    this.props.searchPhone(this.state.value)
  }

  render() {
    return (
      <div className='search'>
        <h3>Quick shop</h3>
        <form
          className='search__form-group'
          onSubmit={this.onSubmitHandler}
        >
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChangeHandler}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchPhone
}

export default connect(null, mapDispatchToProps)(Search)
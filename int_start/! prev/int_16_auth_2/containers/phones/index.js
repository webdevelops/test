import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPhones } from 'actions'
import { getPhones } from 'selectors'

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones()
  }

  renderPhone(phone, index) {
    const shortDescription = `${phone.description.slice(0, 61)}...`

    return (
      <div className="col-xl-4 col-sm-6 mb-3" key={index}>
        <div className="card p-3">
          <img src={phone.image} alt={phone.name} className="card-img-top img-thumbnail img-fluid" />

          <div className="card-body">
            <div className="card-title">
              <Link to={`/phones/${phone.id}`}>
                <h5>{phone.name}</h5>
              </Link>
              <span>${phone.price}</span>
            </div>

            <div className="card-text">
              {shortDescription}
            </div>

            <div className="card-btns">

            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { phones } = this.props

    return (
      <div className='phones-page'>
        <div className="row">
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    phones: getPhones(state)
  }
}

const mapDispatchToProps = {
  fetchPhones
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)
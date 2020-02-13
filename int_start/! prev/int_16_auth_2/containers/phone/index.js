import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPhoneById, addPhoneToBasket } from 'actions'
import { getPhoneById } from 'selectors'
import BasketCart from 'components/basketCart'

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id)
  }

  renderFields(phone) {
    const columnFilds = Object.keys(phone).filter(key => (
      key === 'cpu' ||
      key === 'size' ||
      key === 'weight' ||
      key === 'display' ||
      key === 'memory' ||
      key === 'battery'
    ))

    return (
      columnFilds.map((field, index) => (
        <div className='card__fields_item' key={index}>
          <h4>{field}</h4>
          <span>{phone[field]}</span>
        </div>
      ))
    )
  }

  renderContent(phone) {
    return (
      <div className='card'>
        <div className="card__info">
          <div className="card__image">
            <img src={phone.image} alt={phone.name} />
          </div>
          <div className="card__fields">
            {this.renderFields(phone)}
          </div>
        </div>
        <div className="card__title">
          <h4>{phone.name}</h4>
          <h4>${phone.price}</h4>
        </div>
        <div className="card__text">
          {phone.description}
        </div>
      </div>
    )
  }

  renderSidebar(phone) {
    const { addPhoneToBasket } = this.props

    return (
      <div>
        <h3>Quick shop</h3>
        <BasketCart />
        <h1>{phone.name}</h1>
        <h2>${phone.price}</h2>
        <Link
          to='/'
          className="button button-block button-info"
        >
          Back to store
        </Link>
        <button
          className="button button-block button-success"
          onClick={() => addPhoneToBasket(phone.id)}
        >
          Add to cart
        </button>
      </div>
    )
  }

  render() {
    const { phone } = this.props

    return (
      <div className='phone'>
        <div className="phone__content">
          {phone && this.renderContent(phone)}
        </div>
        <div className="phone__sidebar">
          {phone && this.renderSidebar(phone)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  }
}

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone)
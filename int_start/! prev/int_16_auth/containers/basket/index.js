import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  removePhoneFromBasket,
  clearBasket,
  phonesCheckout
} from 'actions'

import { getBasketPhonesWithCount, getTotalBasketPrice } from 'selectors'

const Basket = ({
  phones,
  totalBasketPrice,
  removePhoneFromBasket,
  clearBasket,
  phonesCheckout
}) => {
  const renderContent = () => {
    return (
      <div>
        {phones.length === 0 && <div>Your shopping cart is empty.</div>}
        <table className='table'>
          <tbody>
            {phones.map((phone, index) => (
              <tr key={index}>
                <td>
                  <div className="table__image">
                    <img src={phone.image} alt={phone.name} />
                  </div>
                </td>
                <td>{phone.name}</td>
                <td>${phone.price}</td>
                <td>{phone.count}</td>
                <td>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => removePhoneFromBasket(phone.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
          phones.length > 0 &&
          <div className='basket__total-price'>
            <b>Total:</b>${totalBasketPrice}
          </div>
        }
      </div>
    )
  }

  const renderSidebar = () => {
    return (
      <div>
        <h3>Quick shop</h3>
        <Link
          to='/'
          className="button button-add"
        >
          <i className="fas fa-info-circle"></i>
          Continue shopping
        </Link>
        {
          phones.length > 0 &&
          <div>
            <button
              className="button button-block button-danger"
              onClick={clearBasket}
            >
              <i className="fas fa-trash-alt"></i>
              Clear basket
          </button>
            <button
              className="button button-block button-warning"
              onClick={() => phonesCheckout(phones)}
            >
              <i className="fas fa-envelope"></i>
              Checkout
          </button>
          </div>
        }
      </div>
    )
  }

  return (
    <div className='basket'>
      <div className="basket__content">
        {renderContent()}
      </div>
      <div className="basket__sidebar">
        {renderSidebar()}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalBasketPrice: getTotalBasketPrice(state)
  }
}

const mapDispatchToProps = {
  removePhoneFromBasket,
  clearBasket,
  phonesCheckout
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


import { removePhoneFromBasket, cleanBasket, checkoutBasket } from 'actions'
import { getBasketPhonesWithCount, getTotalBasketPrice } from 'selectors'

const Basket = ({
  phones,
  totalBasketPrice,
  removePhoneFromBasket,
  cleanBasket,
  checkoutBasket
}) => {
  const renderContent = () => {
    return (
      <div>
        {phones.length === 0 && <h3>Your shopping catr is empty.</h3>}

        <table className='basket__table'>
          <tbody>
            {phones.map((phone, index) => (
              <tr key={index}>
                <td>
                  <div className="basket__table_image">
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
          (phones.length > 0) &&

          <div className='basket__total-count'>
            <b>Total: </b>${totalBasketPrice}
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
          className="button button-info button-block"
        >
          <i className="fas fa-info-circle"></i>
          Back to shopping
        </Link>
        {
          (phones.length > 0) &&

          <div>
            <button
              className="button button-block button-danger"
              onClick={cleanBasket}
            >
              <i className="fas fa-trash-alt"></i>
              Clean basket
            </button>
            <button
              className="button button-block button-success"
              onClick={() => checkoutBasket(phones)}
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
  cleanBasket,
  checkoutBasket
}

Basket.propTypes = {
  phones: PropTypes.array,
  totalBasketPrice: PropTypes.number,
  removePhoneFromBasket: PropTypes.func,
  cleanBasket: PropTypes.func,
  checkoutBasket: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
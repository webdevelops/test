import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { fetchPhoneById, addPhoneToBasket } from 'actions'
import { getPhoneById } from 'selectors'
import BasketCart from 'components/BasketCart'

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id)
  }

  renderFields(phone) {
    const fields = Object.keys(phone).filter(key => (
      key === 'cpu' ||
      key === 'display' ||
      key === 'size' ||
      key === 'weight' ||
      key === 'memory' ||
      key === 'battery'
    ))
    return fields.map((field, index) => (
      <div className='phone-card__fields_item' key={index}>
        <h5>{field}</h5>
        <span>{phone[field]}</span>
      </div>
    ))
  }

  renderContent(phone) {
    return (
      <div className='phone-card'>
        <div className="phone-card__info">
          <div className="phone-card__image">
            <img src={phone.image} alt={phone.name} />
          </div>
          <div className="phone-card__fields">
            {this.renderFields(phone)}
          </div>
        </div>
        <div className="phone-card__title">
          <h4>{phone.name}</h4>
          <h4>${phone.price}</h4>
        </div>
        <div className="phone-card__text">
          {phone.description}
        </div>
      </div>
    )
  }

  renderSidebar(phone) {
    const { addPhoneToBasket } = this.props

    return (
      <div>
        <h4>Quick shop</h4>
        <BasketCart />
        <h1>{phone.name}</h1>
        <h2>${phone.price}</h2>
        <Link
          to='/'
          className="button button-block button-info"
        >
          Continue shopping
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

Phone.propTypes = {
  fetchPhoneById: PropTypes.func,
  match: PropTypes.object,
  phone: PropTypes.object,
  addPhoneToBasket: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone)




// ----------- With hooks & bootstrap 4 -----------

// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

// import { fetchPhoneById, addPhoneToBasket } from 'actions'
// import { getPhoneById } from 'selectors'
// import BasketCart from 'components/basketCart'

// const Phone = ({
//   fetchPhoneById,
//   match,
//   phone,
//   addPhoneToBasket
// }) => {

//   console.log("TCL: Phone -> phone", phone)
//   useEffect(() => {
//     fetchPhoneById(match.params.id)
//   }, [fetchPhoneById, match.params.id])

//   const renderFields = () => {
//     const fields = Object.keys(phone).filter(key => (
//       key === 'cpu' ||
//       key === 'display' ||
//       key === 'size' ||
//       key === 'weight' ||
//       key === 'memory' ||
//       key === 'battery'
//     ))

//     return fields.map((field, index) => (
//       <div className='field d-flex align-items-center pt-3 pb-3 border-bottom' key={index}>
//         <h5 style={{ marginRight: 15 }}>{field}</h5>
//         <span>{phone[field]}</span>
//       </div>
//     ))
//   }

//   const renderContent = () => {
//     return (
//       <div className='card'>
//         <div className="card-body">

//           <div className="row">
//             <div className="col-md-6">
//               <img src={phone.image} alt={phone.name} className="img-thumbnail" />
//             </div>
//             <div className="col-md-6 mb-4">
//               {renderFields()}
//             </div>
//           </div>

//           <div className="card-title d-flex justify-content-between">
//             <h4>{phone.name}</h4>
//             <h4>${phone.price}</h4>
//           </div>

//           <div className="card-text">
//             {phone.description}
//           </div>

//         </div>

//       </div>
//     )
//   }

//   const renderSidebar = () => {
//     return (
//       <div>
//         <h4>Quick shop</h4>
//         <BasketCart />
//         <h1>{phone.name}</h1>
//         <h2>${phone.price}</h2>
//         <Link
//           to='/'
//           className="btn btn-info btn-block"
//         >
//           Continue shopping
//         </Link>
//         <button
//           className="btn btn-success btn-block"
//           onClick={() => addPhoneToBasket(phone.id)}
//         >
//           Add to cart
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div className='phone mt-5 mb-3' style={{ minWidth: 320 }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-9 mb-4">
//             {phone && renderContent()}
//           </div>
//           <div className="col-xl-3">
//             {phone && renderSidebar()}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     phone: getPhoneById(state, state.phonePage.id)
//   }
// }

// const mapDispatchToProps = {
//   fetchPhoneById,
//   addPhoneToBasket
// }

// Phone.propTypes = {
//   fetchPhoneById: PropTypes.func,
//   match: PropTypes.object,
//   phone: PropTypes.object,
//   addPhoneToBasket: PropTypes.func
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Phone)
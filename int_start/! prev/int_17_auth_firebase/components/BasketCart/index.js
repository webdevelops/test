import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getTotalBasketCount, getTotalBasketPrice } from 'selectors'

const BasketCart = ({ totalBasketCount, totalBasketPrice }) => {
  return (
    <div>
      <Link
        to='/basket'
        className="button button-block"
      >
        {totalBasketCount} item(s) - ${totalBasketPrice}
      </Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalBasketPrice: getTotalBasketPrice(state)
  }
}

export default connect(mapStateToProps)(BasketCart)


// ------------- bootstrap 4 --------------

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

// import { getTotalBasketCount, getTotalBasketPrice } from 'selectors'

// const BasketCart = ({ totalBasketCount, totalBasketPrice }) => {
//   return (
//     <div>
//       <Link
//         to='/basket'
//         className="btn btn-primary btn-block"
//       >
//         {totalBasketCount} item(s) - ${totalBasketPrice}
//       </Link>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     totalBasketCount: getTotalBasketCount(state),
//     totalBasketPrice: getTotalBasketPrice(state)
//   }
// }

// BasketCart.propTypes = {
//   totalBasketCount: PropTypes.number,
//   totalBasketPrice: PropTypes.number
// }

// export default connect(mapStateToProps)(BasketCart)
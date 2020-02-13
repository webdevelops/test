import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router'    // ------------ for ConnetedRouter ----

import {
  fetchPhones,
  fetchCategories,
  loadMorePhones,
  addPhoneToBasket,
} from 'actions'

import { getPhones } from 'selectors'
import Layout from 'containers/Layout'

const Phones = ({
  fetchPhones,
  fetchCategories,
  addPhoneToBasket,
  loadMorePhones,
  phones
}) => {
  
  useEffect(() => {
    fetchPhones()
    fetchCategories()
  }, [fetchPhones, fetchCategories])

  const renderPhone = (phone, index) => {
    const shortdescription = `${phone.description.slice(0, 61)}...`

    return (
      <div className='phones__item' key={index}>
        <div className="phone-card">
          <div className="phone-card__image">
            <img src={phone.image} alt={phone.name} />
          </div>
          <div className="phone-card__title">
            <Link
              to={`/phones/${phone.id}`}
            >
              {phone.name}
            </Link>
            <span>${phone.price}</span>
          </div>
          <div className="phone-card__text">
            {shortdescription}
          </div>
          <div className="phone-card__buttons">
            <button
              className="button"
              onClick={() => addPhoneToBasket(phone.id)}
            >
              Buy now!
            </button>
            <Link
              to={`/phones/${phone.id}`}
              className="button button-default"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className='phones'>
        {phones.map((phone, index) => renderPhone(phone, index))}
      </div>
      <div className="phones__more">
        <button
          className="button"
          onClick={loadMorePhones}
        >
          Load more
          </button>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    phones: getPhones(state, ownProps)
  }
}

const mapDispatchToProps = {
  fetchPhones,
  fetchCategories,
  loadMorePhones,
  addPhoneToBasket
}

Phones.propTypes = {
  fetchPhones: PropTypes.func,
  fetchCategories: PropTypes.func,
  phones: PropTypes.arrayOf(PropTypes.object),
  loadMorePhones: PropTypes.func,
  addPhoneToBasket: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)




// ----------- With hooks & bootstrap 4 -----------

// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

// import {
//   fetchPhones,
//   loadMorePhones,
//   addPhoneToBasket,
//   fetchCategories
// } from 'actions'

// // import { sendCategoriesToServer} from 'api'

// import { getPhones } from 'selectors'
// import Layout from 'containers/layout'

// const Phones = ({
//   fetchPhones,
//   phones,
//   loadMorePhones,
//   addPhoneToBasket,
//   fetchCategories,
//   sendCategoriesToServer
// }) => {

//   useEffect(() => {
//     // sendCategoriesToServer()
//     fetchPhones()
//     fetchCategories()
//   }, [fetchPhones, fetchCategories/* , sendCategoriesToServer */ ])

//   const renderPhone = (phone, index) => {
//     const shortDescription = `${phone.description.slice(0, 61)}...`

//     return (
//       <div className="col-xl-4 col-sm-6 mb-4" key={index}>
//         <div className="card">
//           <div className="card-image text-center mt-2">
//             <img src={phone.image} alt={phone.name} className="img-thumbnail" />
//           </div>
//           <div className="card-body">
//             <div className="card-title d-flex justify-content-between">
//               <Link
//                 to={`/phones/${phone.id}`}
//               >
//                 <h5 style={{ fontSize: '1.2rem' }}>{phone.name}</h5>
//               </Link>
//               <span><b>${phone.price}</b></span>
//             </div>
//             <div className="card-text">
//               {shortDescription}
//             </div>
//             <div className="card-btns text-center mt-3">
//               <button
//                 className="btn btn-primary mr-2"
//                 onClick={() => addPhoneToBasket(phone.id)}
//               >
//                 Buy now!
//               </button>
//               <Link
//                 to={`/phones/${phone.id}`}
//                 className="btn btn-outline-info"
//               >
//                 More info
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <Layout>
//       <div className='phones'>
//         <div className="row">
//           {phones.map((phone, index) => renderPhone(phone, index))}
//         </div>
//         <div className="phones__more text-right mb-3">
//           <button
//             className="btn btn-primary"
//             onClick={loadMorePhones}
//           >
//             Load More
//           </button>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     phones: getPhones(state, ownProps)
//   }
// }

// const mapDispatchToProps = {
//   fetchPhones,
//   loadMorePhones,
//   addPhoneToBasket,
//   fetchCategories,
//   // sendCategoriesToServer
// }

// Phones.propTypes = {
//   fetchPhones: PropTypes.func,
//   phones: PropTypes.arrayOf(PropTypes.object),
//   loadMorePhones: PropTypes.func,
//   addPhoneToBasket: PropTypes.func,
//   fetchCategories: PropTypes.func
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Phones)
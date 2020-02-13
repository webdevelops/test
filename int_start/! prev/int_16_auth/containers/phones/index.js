import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { 
  fetchPhones, 
  loadMorePhones, 
  addPhoneToBasket,
  fetchCategories
} from 'actions'

import { getPhones } from 'selectors'
import Layout from 'containers/layout'

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones()
    this.props.fetchCategories()
  }

  renderPhone(phone, index) {
    const { addPhoneToBasket } = this.props
    const shortDescription = `${phone.description.slice(0, 61)}...`

    return (
      <div className='phones__item' key={index}>

        <div className="card">
          <div className="card__image">
            <img src={phone.image} alt={phone.name} />
          </div>

          <div className="card__title">
            <Link
              to={`/phones/${phone.id}`}
            >
              <h5>{phone.name}</h5>
            </Link>
            <span>${phone.price}</span>
          </div>

          <div className="card__text">
            {shortDescription}
          </div>

          <div className="card__buttons">
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

  render() {
    const { phones, loadMorePhones } = this.props

    return (
      <Layout>
        <div className='phones'>
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>
        <div className="phones__more">
          <button
            className="button"
            onClick={loadMorePhones}
          >
            More Load
          </button>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    phones: getPhones(state, ownProps)
  }
}

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

// import { fetchPhones } from 'actions'
// import { getPhones } from 'selectors'

// class Phones extends Component {
//   componentDidMount() {
//     this.props.fetchPhones()
//   }

//   renderPhone(phone, index) {
//     const shortDescription = `${phone.description.slice(0, 61)}...`

//     return (
//       <div className="col-xl-4 col-sm-6 mb-3" key={index}>
//         <div className="card p-3">
//           <img src={phone.image} alt={phone.name} className="card-img-top img-thumbnail img-fluid" />

//           <div className="card-body">
//             <div className="card-title">
//               <Link to={`/phones/${phone.id}`}>
//                 <h5>{phone.name}</h5>
//               </Link>
//               <span>${phone.price}</span>
//             </div>

//             <div className="card-text">
//               {shortDescription}
//             </div>

//             <div className="card-btns">

//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   render() {
//     const { phones } = this.props

//     return (
//       <div className='phones-page'>
//         <div className="row">
//           {phones.map((phone, index) => this.renderPhone(phone, index))}
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     phones: getPhones(state)
//   }
// }

// const mapDispatchToProps = {
//   fetchPhones
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Phones)
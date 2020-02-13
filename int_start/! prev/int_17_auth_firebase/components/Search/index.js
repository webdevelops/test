import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchPhone } from 'actions'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSubmitHandler(e) {
    e.preventDefault()
    this.props.searchPhone(this.state.search)
  }

  render() {
    return (
      <div className='search'>
        <h3>Quick shop</h3>
        <form className="search__form" onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            value={this.state.search}
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


// ------------- hooks and bootsrap 4 -------------

// import React, { useState } from 'react'
// import { connect } from 'react-redux'

// import { searchPhone } from 'actions'

// const Search = ({ searchPhone }) => {
//   const [search, setSearch] = useState('')

//   const onChangeHandler = event => {
//     setSearch(event.target.value)
//   }

//   const onSubmitHandler = event => {
//     event.preventDefault()
//     searchPhone(search)
//   }

//   return (
//     <div className='search jumbotron'>
//       <h3>Quick shop</h3>
//       <form onSubmit={onSubmitHandler} >
//         <div className="d-flex mt-3">
//           <input
//             type="text"
//             value={search}
//             onChange={onChangeHandler}
//             className='w-100 p-2 border-light'
//           />
//           <button>
//             <i className="fas fa-search"></i>
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// const mapDispatchToProps = {
//   searchPhone
// }

// export default connect(null, mapDispatchToProps)(Search)
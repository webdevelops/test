import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { getCategories } from 'selectors'

const Categories = ({ categories, match }) => {
  const activeCategoryId = match.params.id || undefined
  
  const renderCategory = (category, index) => {
    let classes = 'categories__item'
    classes = activeCategoryId === category.id 
      ? `${classes} active-link`
      : classes

    return (
      <Link
        key={index}
        to={`/categories/${category.id}`}
        className={classes}

      >
        {category.name}
      </Link>
    )
  }

  const renderAllCategories = () => {
    let classes = 'categories__item'
    classes = activeCategoryId === undefined
      ? `${classes} active-link`
      : classes

    return (
      <Link to='/' className={classes}> All </Link>
    )
  }

  return (
    <div className='categories'>
      <h3>Brand</h3>
      {renderAllCategories()}
      {categories.map((category, index) => renderCategory(category, index))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    categories: getCategories(state)
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Categories)
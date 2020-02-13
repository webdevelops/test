import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { getCategories } from 'selectors'

const Categories = ({ categories, match }) => {
  const activeCategory = match.params.id || undefined

  const renderCategory = (category, index) => {
    const classes = category.id === activeCategory
      ? `categories__item active`
      : 'categories__item'

    return (
      <Link
        to={`/categories/${category.id}`}
        key={index}
        className={classes}
      >
        {category.name}
      </Link>
    )
  }

  const renderAllCategories = () => {
    let classes = 'categories__item'
    classes = activeCategory === undefined
      ? `${classes} active`
      : classes

    return (
      <Link to='/' className={classes} > All </Link>
    )
  }

  return (
    <div className='categories'>
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
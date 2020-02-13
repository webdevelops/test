import React from 'react'

import { isValid } from 'selectors'

const Input = props => {
  const htmlFor = `${props.type}-${Math.random()}`

  let classes = 'input'
  if (!isValid(props)) {
    classes = `${classes} invalid`
  }

  return (
    <div className={classes}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        id={htmlFor}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />

      {!isValid(props) && <span>{props.errorMessage || 'Enter correct value'}</span>}
    </div>
  )
}

export default Input
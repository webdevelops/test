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
        type={props.type}
        value={props.value}
        id={htmlFor}
        onChange={props.onChange}
      />

      {!isValid(props) && <span>Enter correct value</span>}
    </div>
  )
}

export default Input
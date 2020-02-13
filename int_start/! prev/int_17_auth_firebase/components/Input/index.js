import React from 'react'

import { isValid } from 'selectors'

const Input = props => {
  // console.log("TCL: props", props)
  const htmlFor = `${Math.random()}-${props.label}`

  let classes = 'input'
  classes = !isValid(props)
    ? `${classes} invalid`
    : classes

  return (
    <div className={classes}>
      <label htmlFor={htmlFor}>{props.label}</label>

      <input
        type={props.type}
        value={props.value}
        onChange={props.onChangeHandler}
      />

      {!isValid(props) && <span>{props.errorMessage || 'Enter correct value'}</span>}
    </div>
  )
}

export default Input
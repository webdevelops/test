import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Input from 'components/Input'
import { validateControl, validateForm } from 'selectors'
import { auth } from 'actions'

const Auth = ({ auth }) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [formControls, setFormControls] = useState({
    email: {
      type: 'email',
      label: 'Email',
      value: '',
      valid: false,
      touched: false,
      errorMessage: 'Enter correct email',
      validation: {
        required: true,
        email: true
      }
    },
    password: {
      type: 'password',
      label: 'Password',
      value: '',
      valid: false,
      touched: false,
      errorMessage: 'Enter password at least 6 characters',
      validation: {
        required: true,
        minLength: 6
      }
    }
  })

  const onChangeHandler = (e, controlName) => {
    // const newFormControls = Object.assign({}, formControls)
    const newFormControls = { ...formControls }
    const control = newFormControls[controlName]

    control.value = e.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)

    setFormControls(newFormControls)
    setIsFormValid(validateForm(formControls))
  }

  const returnInput = (controlName, index) => {
    const control = formControls[controlName]

    return (
      <Input
        key={index}
        type={control.type}
        label={control.label}
        value={control.value}
        valid={control.valid}
        touched={control.touched}
        errorMessage={control.errorMessage}
        onChangeHandler={(e) => onChangeHandler(e, controlName)}
      />
    )
  }

  const onSubmitHandler = event => event.preventDefault()

  const onRegisterHandler = () => auth(
    formControls.email.value,
    formControls.password.value,
    false
  )

  const onLoginHandler = () => auth(
    formControls.email.value,
    formControls.password.value,
    true
  )

  return (
    <div className='auth'>
      <div>
        <h1>Authorization</h1>
        <form onSubmit={onSubmitHandler}>
          {Object.keys(formControls).map((controlName, index) => returnInput(controlName, index))}

          <button
            className='button button-primary'
            disabled={!isFormValid}
            onClick={onLoginHandler}
          >Login</button>
          <button
            className='button button-success'
            disabled={!isFormValid}
            onClick={onRegisterHandler}
          >Registration</button>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  auth
}

Auth.propTypes = {
  auth: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Auth)


// ------------ class Component -------------
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

// import Input from 'components/Input'
// import { validateControl, validateForm } from 'selectors'
// import { auth } from 'actions'

// class Auth extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isFormValid: false,
//       formControls: {
//         email: {
//           type: 'email',
//           label: 'Email',
//           value: '',
//           valid: false,
//           touched: false,
//           errorMessage: 'Enter valid email',
//           validation: {
//             required: true,
//             email: true
//           }
//         },
//         password: {
//           type: 'password',
//           label: 'Password',
//           value: '',
//           valid: false,
//           touched: false,
//           errorMessage: 'Enter valid password',
//           validation: {
//             required: true,
//             minLength: 6
//           }
//         }
//       }
//     }
//     this.renderInput = this.renderInput.bind(this)
//     this.onChangeHandler = this.onChangeHandler.bind(this)
//     this.onSubmitHandler = this.onSubmitHandler.bind(this)
//     this.onRegisterHandler = this.onRegisterHandler.bind(this)
//     this.onLoginHandler = this.onLoginHandler.bind(this)
//   }

//   onChangeHandler(e, controlName) {
//     const { formControls } = this.state
//     const control = { ...formControls[controlName] }

//     control.value = e.target.value
//     control.touched = true
//     control.valid = validateControl(control.value, control.validation)

//     formControls[controlName] = control

//     this.setState({
//       formControls,
//       isFormValid: validateForm(formControls)
//     })
//   }

//   renderInput(controlName, index) {
//     const control = this.state.formControls[controlName]

//     return (
//       <Input
//         key={index}
//         type={control.type}
//         label={control.label}
//         value={control.value}
//         valid={control.valid}
//         touched={control.touched}
//         errorMessage={control.errorMessage}
//         onChangeHandler={(e) => this.onChangeHandler(e, controlName)}
//       />
//     )
//   }

//   onSubmitHandler(e) {
//     e.preventDefault()
//   }

//   onLoginHandler() {
//     const { auth } = this.props
//     const { formControls } = this.state
//     auth(
//       formControls.email.value,
//       formControls.password.value,
//       true
//     )
//   }

//   onRegisterHandler() {
//     const { auth } = this.props
//     const { formControls } = this.state
//     auth(
//       formControls.email.value,
//       formControls.password.value,
//       false
//     )
//   }

//   render() {
//     const { formControls, isFormValid } = this.state

//     return (
//       <div className='auth'>
//         <div>
//           <h1>Authorization</h1>
//           <form onSubmit={this.onSubmitHandler}>
//             {Object.keys(formControls).map((controlName, index) => this.renderInput(controlName, index))}

//             <button
//               className="button"
//               disabled={!isFormValid}
//               onClick={this.onLoginHandler}
//             >
//               Login
//             </button>

//             <button
//               className="button"
//               disabled={!isFormValid}
//               onClick={this.onRegisterHandler}
//             >
//               Registration
//             </button>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// const mapDispatchToProps = {
//   auth
// }

// Auth.propTypes = {
//   auth: PropTypes.func
// }

// export default connect(null, mapDispatchToProps)(Auth)
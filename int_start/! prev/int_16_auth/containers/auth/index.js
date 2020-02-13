import React, { Component } from 'react'

import Input from 'components/input'
import { validateEmail } from 'selectors'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormValid: false,
      formControls: {
        email: {
          value: '',
          type: 'email',
          label: 'Email',
          valid: false,
          touched: false,
          errorMessage: 'Enter correct value',
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: '',
          type: 'password',
          label: 'Password',
          valid: false,
          touched: false,
          errorMessage: 'Enter correct value',
          validation: {
            required: true,
            minLength: 6
          }
        }
      }
    }
    this.renderInputs = this.renderInputs.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler(e, controlName) {
    const formControls = { ...this.state.formControls }
    const control = formControls[controlName]

    control.value = e.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => (
      isFormValid = formControls[name].valid && isFormValid
    ))

    this.setState({
      formControls,
      isFormValid
    }/* , () => console.log('formControls', formControls) */)
  }

  renderInputs() {
    const { formControls } = this.state

    return (
      Object.keys(formControls).map((controlName, index) => {
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
            onChange={e => this.onChangeHandler(e, controlName)}
          />
        )
      })
    )
  }

  onSubmitHandler(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className='auth'>
        <div>
          <h1>Authorization</h1>
          <form onSubmit={this.onSubmitHandler}>
            {this.renderInputs()}

            <button
              className="button"
              disabled={!this.state.isFormValid}
            >
              Login
            </button>
            <button
              className="button button-success"
              disabled={!this.state.isFormValid}
            >
              Registration
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Auth
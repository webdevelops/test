import React, { Component } from 'react'

import Input from 'components/input'
import { validateControl } from "selectors"

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormValid: true,
      formControls: {
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
          valis: false,
          touched: false,
          errorMessage: 'Enter correct paasword',
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

  onChangeHandler(e, controlName) {
    const formControls = { ...this.state.formControls }
    const control = formControls[controlName]

    control.value = e.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)

    let isFormValid = true
    Object.keys(formControls).map(name => (
      isFormValid = formControls[name].valid && isFormValid
    ))

    this.setState({
      formControls,
      isFormValid
    }/* , () => console.log(this.state.isFormValid) */)
  }

  renderInputs() {
    const { formControls } = this.state

    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName]

      return (
        <Input
          key={index}
          type={control.type}
          label={control.label}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          errorMessage={control.errorMessase}
          onChange={(e) => this.onChangeHandler(e, controlName)}
        />
      )
    })
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
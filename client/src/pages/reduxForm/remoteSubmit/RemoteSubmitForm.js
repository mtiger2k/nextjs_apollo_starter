import React from 'react'
import {Field, reduxForm} from 'redux-form'
import submit from './submit'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  return errors
}

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const RemoteSubmitForm = props => {
  const {error, handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        No submit button in the form. The submit button below is a separate unlinked component.
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'remoteSubmit', // a unique identifier for this form
  validate,
  onSubmit: submit // submit function must be passed to onSubmit
})(RemoteSubmitForm)

import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { graphql, gql } from 'react-apollo'

const validate = values => {
  const errors = {}
  if (!values.dispName) {
    errors.dispName = 'Required'
  }
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.role) {
    errors.role = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 4) {
    errors.password = 'Must be 4 characters or more'
  }
  if (values.confirmPassword != values.password) {
      errors.confirmPassword = 'Must match password'
    }
  return errors
}

const submit = async (values, dispatch, props) => {
  try {
    const result = await props.register({ variables: values});
    alert("Register successfully");
  } catch(e) {
    return Promise.reject(new SubmissionError({_error: e.toString()}));
  }
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={(touched && error)?"form-group has-error" : "form-group"}>
        <label>{label}</label>
        <input placeholder={type} className="form-control" {...input} type={type}/>
        {touched && error && <span className="help-block">{error}</span>}
    </div>
)


class RegisterForm extends Component {

    render() {
        const { handleSubmit, resetForm, submitting, error } = this.props;
        return (
          <div className="register-box">
            <div className="register-logo">
              <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>

            <div className="register-box-body">
              <p className="login-box-msg">Register a new membership</p>
              <form onSubmit={handleSubmit(submit)}>
              {error && <div className="alert alert-danger">{error}</div>}
                  <Field name="dispName" type="text" component={renderField} label="用户名"/>
                  <Field name="username" type="text" component={renderField} label="登录名"/>
                  <Field name="password" type="password" component={renderField} label="密码"/>
                  <Field name="confirm_password" type="password" component={renderField} label="确认密码"/>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <label>
                      <input type="checkbox"/> I agree to the <a href="#">terms</a>
                    </label>
                  </div>
                </div>
                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                </div>
              </div>

              </form>

          <a href="/login" className="text-center">I already have a membership</a>

        </div>
      </div>
              );
    }
}

const withMutation = graphql(gql`
  mutation register($dispName: String!, $username: String!, $password: String!) {
    register(dispName: $dispName, username: $username, password: $password) {
      dispName
      username
    }
  }
`, { name: 'register' });

// Decorate the form component
export default withMutation(reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm));

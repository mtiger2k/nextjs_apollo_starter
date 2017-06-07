import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { graphql, gql } from 'react-apollo'
import Router from 'next/router'
import { login } from '../utils/AuthService';

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 4) {
    errors.password = 'Must be 4 characters or more'
  }
  return errors
}


const submit = async (values, dispatch, props) => {
  try {
    const result = await props.login({ variables: values});
    login(result.data.login.token, result.data.login.user);
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


class LoginForm extends Component {

    render() {
        const { handleSubmit, resetForm, submitting, error } = this.props;
        return (
			<div className="login-box">
			  <div className="login-logo">
			    <a href="../../index2.html"><b>Admin</b>LTE</a>
			  </div>
			  <div className="login-box-body">
			    <p className="login-box-msg">Sign in to start your session</p>
	            <form onSubmit={handleSubmit(submit)}>
	            {error && <div className="alert alert-danger">{error}</div>}
	                <Field name="username" type="text" component={renderField} label="用户名"/>
	                <Field name="password" type="password" component={renderField} label="密码"/>
	            <div className="row">
	                <div className="col-xs-4 pull-right">
	                    <button type="submit" disabled={submitting} className="btn btn-primary btn-block btn-flat">{submitting?'正在登录': '登录'}</button>
	                </div>
	            </div>
	            </form>

			    <a href="#">I forgot my password</a><br/>
			    <a href="/register" className="text-center">Register a new membership</a>

			  </div>
			</div>
		);
    }
}

const mapStateToProps = (state) => ({
  //errorMsg: state.auth.errorMsg
});

const withMutation = graphql(gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
      	id
        username
      	dispName
      }
    }
  }
`, { name: 'login' });

// Decorate the form component
export default withMutation(connect(mapStateToProps)(reduxForm({
    form: 'loginForm',
    validate
})(LoginForm)));
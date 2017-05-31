import React from 'react'
import {connect} from 'react-redux'
import {submit, isSubmitting,
  hasSubmitSucceeded,
  hasSubmitFailed} from 'redux-form'

const style = {
  padding: '10px 20px',
  width: 140,
  display: 'block',
  margin: '20px auto',
  fontSize: '16px'
}

class RemoteSubmitButton extends React.Component {
  
  componentWillReceiveProps(nextProps) {
    if (this.props.submitting == true && nextProps.submitting != true) {
      if (nextProps.submitSucceeded) {
        // remote form submitted success, do something then
        
      }
    }
  }

  render() {
    const {dispatch} = this.props;
    return (
      <button
        type="button"
        style={style}
        onClick={() => dispatch(submit('remoteSubmit'))}
      >
        Submit
      </button>

    )
  }

}

//                                  ^^^^^^^^^^^^ name of the form

export default connect(
  state => ({
    submitting: isSubmitting('remoteSubmit')(state),
    submitSucceeded: hasSubmitSucceeded('remoteSubmit')(state),
    submitFailed: hasSubmitFailed('remoteSubmit')(state)
  })
)(RemoteSubmitButton)

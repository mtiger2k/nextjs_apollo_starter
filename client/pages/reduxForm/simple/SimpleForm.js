import React from 'react'
import {Field, reduxForm} from 'redux-form'

const SimpleForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name</label>
        <div>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
          className="form-control"
        />
        </div>
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <div>
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last Name"
          className="form-control"
        />
        </div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <div>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
          className="form-control"
        />
        </div>
      </div>
      <div className="form-group">
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>Favorite Color</label>
        <div>
        <Field name="favoriteColor" component="select" className="form-control">
          <option />
          <option value="ff0000">Red</option>
          <option value="00ff00">Green</option>
          <option value="0000ff">Blue</option>
        </Field>
        </div>
      </div>
      <div className="form-group">
        <Field
          name="employed"
          id="employed"
          component="input"
          type="checkbox"
        />
        <label htmlFor="employed">Employed</label>
      </div>
      <div className="form-group">
        <label>Notes</label>
        <div><Field name="notes" component="textarea" className="form-control"/></div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)



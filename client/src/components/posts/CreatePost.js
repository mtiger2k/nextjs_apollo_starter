import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { graphql, gql } from 'react-apollo';
import { allPostsQuery } from '../graphql';

const submit = async (values, dispatch, props) => {
  try {
    const result = await props.createPost({description: values.description, userId: props.user.id});
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


class PostForm extends Component {

    render() {
        const { handleSubmit, resetForm, submitting, error } = this.props;
        return (
          <form onSubmit={handleSubmit(submit)}>
          {error && <div className="alert alert-danger">{error}</div>}
          <Field name="description" type="text" component={renderField} label="Post"/>
          <div className="row">
              <div className="col-xs-4">
                  <button type="submit" disabled={submitting} className="btn btn-primary">{submitting?'正在提交': '提交'}</button>
              </div>
          </div>
          </form>
		);
    }
}

const withMutation = graphql(gql`
  mutation createPost($description: String!, $userId: String!) {
    createPost(description: $description, userId: $userId) {
      id
      description
      createAt
      user {
        dispName
      }
    }
  }
`, {
  props({ ownProps, mutate }) {
    return {
      createPost({ description, userId }) {
        return mutate({
          variables: { description, userId },
          optimisticResponse: {
            __typename: 'Mutation',
            createPost: {
              __typename: 'Post',
              description,
              createAt: +new Date,
              user: {
                dispName: ownProps.user.dispName,
                __typename: 'User'
              },
              id: (new Date()).getTime()
            },
          },
          update: (store, { data: { createPost } }) => {
            // Read the data from our cache for this query.
            const data = store.readQuery({ query: allPostsQuery });
            // Add our comment from the mutation to the end.
            data.allPosts.push(createPost);
            // Write our data back to the cache.
            store.writeQuery({ query: allPostsQuery, data });
          },
        });
      },
    };
  }
});

// Decorate the form component
export default withMutation(reduxForm({
    form: 'postForm'
})(PostForm));

import React from 'react'
import Link from 'next/link'
import { graphql, gql } from 'react-apollo'

import Box from '../lib/widgets/Box';
import { allPostsQuery } from '../graphql';

class List extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render() {
    if (this.props.data.loading) {
      return (<div className='List'>
        <div>
          Loading
        </div>
      </div>)
    }

    return (
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <Box
            title="Post List!"
            status="primary"
            expandable
            removable>
            {this.props.data.allPosts && this.props.data.allPosts.map(post => <div id={post.id}> {post.user.dispName + ': ' + post.description} </div>)}
          </Box>
        </div>
      </div>
    )
  }
}


// TODO: Should find a way to auto refresh when new data is available (subscriptions or redux?)
const withData = graphql(allPostsQuery);
export default withData(List)

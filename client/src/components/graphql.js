
import { graphql, gql } from 'react-apollo';

const allPostsQuery = gql`query allPosts {
  allPosts(orderBy: DESC) {
    id
    description
    createAt
    user {
      dispName
    }
  }
}`

export { allPostsQuery }
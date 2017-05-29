import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type User {
    id: String!
    username: String!
    dispName: String!
    posts: [Post]
}

type UserToken {
    userId: String!,
    token: String!,
    user: User
}

type Post {
    id: String!
    description: String
    createAt: String
    user: User
}

enum OrderPost {
    DESC
}

type Query {
    me: User
    allPosts(orderBy: OrderPost): [Post]
}

type Mutation {
    createPost(description: String!, userId: String!): Post!
    login(username: String!, password: String!): UserToken
    register(dispName: String, username: String, password: String): User
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
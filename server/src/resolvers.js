import UserModel from './models/User';
import PostModel from './models/Post';

const jwt = require('jwt-simple');

export const resolvers = {
    Query: {
        allPosts: (root, args) => {
            return PostModel.find();
        },
        me: (root, args) => {
            return root.user;
        }
    },
    Mutation: {
        createPost: (root, args) => {
            return (new PostModel({...args, createAt: new Date()})).save();
        },
        login: (root, args) => {
            return UserModel.findOne({username: args.username})
            .then((user) => {
                if (!user || !user.validPassword(args.password)) {
                    throw new Error("Username or password not match");
                }

                return Promise.resolve({
                    userId: user._id,
                    token: jwt.encode({ sub: user._id, iat: new Date().getTime(), login: user.username, }, process.env.SECRET)
                });
            });
        },
        register: (root, args) => {
            return UserModel.findOne({username: args.username})
            .then((user) => {
                if (user) {
                    throw new Error("Username already exist");
                }

                return (new UserModel(args)).save();
            });            
        }
    },
    // Resolves of complex fields
    Post: {
        user(post) {
            return UserModel.findById(post.userId);
        },
        createAt(post) {
            return post.createAt;
        }
    },
    UserToken: {
        user(userToken) {
            return UserModel.findById(userToken.userId);
        }
    },
    User: {
        posts(user) {
            return PostModel.find({userId: user._id});
        }
    }
};
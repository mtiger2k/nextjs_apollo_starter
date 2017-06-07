const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    description: String,
    userId: String,
    createAt: Date
});

// Create the model class
const ModelClass = mongoose.model('post', postSchema);

// Export the model
module.exports = ModelClass;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userTokenSchema = new Schema({
    userId: String,
    token: String
});

// Create the model class
const ModelClass = mongoose.model('userToken', userTokenSchema);

// Export the model
module.exports = ModelClass;

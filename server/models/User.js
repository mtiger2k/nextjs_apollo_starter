const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    dispName: String,
    username: String,
    password: String,
});

// Pre-save hook to hash password
userSchema.pre('save', function(next) {
    const user = this;

    // Generate a encryption salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }

        // Encrypt the password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }

            // Overwrite plain text password
            user.password = hash;
            next();
        });
    });
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;

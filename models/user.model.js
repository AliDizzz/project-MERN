const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userShema = new mongoose.Shema(
    {
        pseudo: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate:  [isEmail],
            lowercase: true,
            trim: true,
        },
        password: {
            typr: String,
            required: true,
            max: 1024,
            minLength: 6
        },
        bio: {
            type: String,
            max: 1024,
        },
        followers: {
            type: [String]
        },
        following: {
            type: [String]
        },
        likes: {
            type: [String]
        }
    },
    {
        timestamps: true,
    }
)

const UserModel = mongoose.model('user', userShema);

module.exports = UserModel;
const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true, // obligatire
            minLength: 3,  // minimum 3 caractère
            maxLength: 55, // maximum 55 caractère
            unique: true, // strictement unique
            trim: true // efface les espace de chaque coté
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail], // format valide d'un mail
            lowercase: true, // converti en minuscule
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
        picture: {
            type: String,
            default: "./uploads/profil/random-user.png"
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
);

//play function befor save into display: "block"
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next(); //une fois la fonction terminée, passe a la suite "next"  
});

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email')
};


const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
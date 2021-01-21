module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: '' }

    if (err.message.includes('pseudo'))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

    if (err.message.includes('email'))
    errors.email = 'Email incorrect';

    if (err.password.includes('password'))
    errors.password = 'Le mot de passe doit faire 6 caractères minimum';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.email = 'Ce pseudo est déjà pris';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = 'Cet email est déjà enregistré';

    return errors
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}

    if (err.message.includes("email")) // si err.message inclue " email " renvoie moi ça :
    errors.email = "Email inconnu";

    if (err.password.includes("password"))
    errors.password = "Le mot de passe ne correspond pas"

    return errors
}
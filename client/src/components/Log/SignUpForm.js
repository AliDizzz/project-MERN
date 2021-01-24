import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
    
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [controlPassword, setControlPassword] = useState("");

    return (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
            <input type="submit" value="Valider inscription" />
        </form>
    );
};

export default SignUpForm;
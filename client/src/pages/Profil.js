import React from 'react';
import Log from '../components/Log';

const Profil = () => {
    return (
        <div>
            <div className="profil-page">
                <div className="log-container">
                    <Log />
                    <img src="./img/log.svg" alt="img-log"/>
                </div>
            </div>
        </div>
    );
};

export default Profil;
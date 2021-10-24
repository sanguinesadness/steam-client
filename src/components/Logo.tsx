import React from 'react';
import SteamLogo from '../icons/steam-logo.svg';

const Logo = () => {
    return (
        <div className="logo">
            <SteamLogo className="steam-logo"/>
            <h2>Steam Client</h2>
        </div>
    )
}

export default Logo;

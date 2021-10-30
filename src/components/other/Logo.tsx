import React from 'react';
import SteamLogoIcon from '../../icons/steam-logo.svg';
import * as SC from '../../styles/styled-components/logo';

const Logo = () => {
    return (
        <SC.Logo>
            <SteamLogoIcon/>
            <SC.Text>Steam Client</SC.Text>
        </SC.Logo>
    )
}

export default Logo;

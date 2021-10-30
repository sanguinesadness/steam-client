import React from 'react';
import Logo from './Logo';
import * as SC from '../../styles/styled-components/header';

const Header = () => {
    return (
        <SC.Header>
            <Logo/>
        </SC.Header>
    )
}

export default Header

import React from 'react';
import * as SC from '../../styles/styled-components/root';
import Header from './Header';
import Process from './Process';
import Users from './Users';

const Root = () => {
    return (
        <SC.Root>
            <SC.Content>
                <Header/>
                <Users/>
                <Process/>
            </SC.Content>
        </SC.Root>
    )
}

export default Root;

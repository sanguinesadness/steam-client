import React from 'react';
import User from './User';
import * as SC from '../../styles/styled-components/users';
import { UserTypes } from '../../types/user';

const Users = () => {
    return (
        <SC.Users>
            <User type={UserTypes.VICTIM}/>
            <User type={UserTypes.FAKE}/>
        </SC.Users>
    )
}

export default Users

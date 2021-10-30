import React, { FC } from 'react';
import * as SC from '../../styles/styled-components/user';
import Button from '../UI/Button';
import Error from '../UI/Error';
import { useDispatch } from 'react-redux';
import { getVictim } from '../../store/actions/victim';
import Loading from '../UI/Loading';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import UserInfo from './UserInfo';

const Victim: FC = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useTypedSelector(root => root.victim);

    const requestUser = () => {
        dispatch(getVictim());
    }

    return (
        <SC.User>
            <div className="header">
                <user.icon/>
                <span>{user.name}</span>
            </div>
            <div className="body">
                {
                    error ? 
                        <Error text={`Error: ${error}`}/>
                    : loading ? 
                        <Loading/>
                    : user.steamUser ?
                        <UserInfo user={user.steamUser}/>
                    : <Error text="No account found"/>
                }
            </div>
            <div className="footer">
                <div className="buttons">
                    <Button text="Refresh" onClick={requestUser}/>
                    <Button text="Manual login..."/>
                </div>
            </div>
        </SC.User>
    )
}

export default Victim

import React, { FC, useEffect, useState } from 'react';
import * as SC from '../../styles/styled-components/user';
import Button from '../UI/Button';
import Error from '../UI/Error';
import { useDispatch } from 'react-redux';
import Loading from '../UI/Loading';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import UserInfo from './UserInfo';
import { UserType, UserTypes } from '../../types/user';
import LoginModal from '../modals/LoginModal';
import LogoutModal from '../modals/LogoutModal';
import { refreshUser } from '../../store/actions/common';
import RandomButton from './RandomButton';
import { GiCookie } from 'react-icons/gi';
import { IoMdRefreshCircle } from 'react-icons/io';
import { IoLogOut, IoLogIn } from 'react-icons/io5';
import CookieModal from '../modals/CookieModal';
import Colors from '../../constants/colors';
import { Buttons } from '../../styles/styled-components/button';
import WarningButton from './WarningButton';

interface IUserProps {
    type: UserType;
}

const User: FC<IUserProps> = ({ type }) => {
    const dispatch = useDispatch();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);
    const [isCookieModalOpen, setIsCookieModalOpen] = useState<boolean>(false);

    const CookieIcon = () => <GiCookie/>
    const RefreshIcon = () => <IoMdRefreshCircle/>
    const LogoutIcon = () => <IoLogOut/>
    const LoginIcon = () => <IoLogIn/>

    const { user, loading, error } = useTypedSelector(root => {
        switch (type) {
            case UserTypes.FAKE:
                return root.fake;
            case UserTypes.VICTIM:
                return root.victim;
        }
    });

    const refresh = () => {
        refreshUser(user.type, dispatch);
    }

    useEffect(() => {
        refresh();
    }, []);

    const openLoginModal = () => {
        if (!user.steamUser) {
            setIsLoginModalOpen(true);
        }
    }

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    }

    const openLogoutModal = () => {
        if (user.steamUser) {
            setIsLogoutModalOpen(true);
        }
    }

    const closeLogoutModal = () => {
        setIsLogoutModalOpen(false);
    }

    const openCookieModal = () => {
        setIsCookieModalOpen(true);
    }

    const closeCookieModal = () => {
        setIsCookieModalOpen(false);
    }

    return (
        <SC.User>
            <div>
                <SC.Header>
                    <SC.Icon>
                        <user.icon />
                    </SC.Icon>
                    <SC.Name>
                        {user.name}
                    </SC.Name>
                </SC.Header>
                <SC.Body>
                    {
                        loading ?
                            <Loading />
                            : user.steamUser ?
                                <UserInfo user={user.steamUser} />
                                : <Error text="No account found" />
                    }
                </SC.Body>
                <div>
                    {
                        user.steamUser ?
                            <div>
                                <Buttons direction="row" display="flex" margin="10px 0">
                                    <Button text="Refresh" 
                                            onClick={refresh} 
                                            Icon={RefreshIcon} 
                                            disabled={loading}
                                            loading={loading}
                                            color={Colors.GRAY}/>
                                    <Button text="Show cookies" 
                                            onClick={openCookieModal} 
                                            Icon={CookieIcon}
                                            disabled={loading}
                                            color={Colors.GRAY}/>
                                </Buttons>
                                <Buttons margin="10px 0">
                                    {
                                        user.type === UserTypes.FAKE ? 
                                            <RandomButton/>
                                        : user.type === UserTypes.VICTIM ? 
                                            <WarningButton/>
                                        : <></>
                                    }
                                </Buttons>
                                <Buttons>
                                    <Button text="Log out" 
                                            onClick={openLogoutModal} 
                                            Icon={LogoutIcon}
                                            disabled={loading}
                                            color={Colors.RED}/>
                                </Buttons>
                            </div>
                            :
                            <>
                                <Buttons margin="10px 0">
                                    <Button text="Refresh" 
                                            onClick={refresh} 
                                            Icon={RefreshIcon} 
                                            disabled={loading}
                                            loading={loading}
                                            color={Colors.GRAY}/>
                                </Buttons>
                                <Buttons margin="10px 0">
                                    <Button text="Manual login..." 
                                            onClick={openLoginModal} 
                                            Icon={LoginIcon} 
                                            disabled={loading}/>
                                </Buttons>
                            </>
                    }
                </div>
            </div>
            
            <LoginModal isOpen={isLoginModalOpen}
                        closeAction={closeLoginModal}
                        user={user}/>

            <LogoutModal isOpen={isLogoutModalOpen}
                         closeAction={closeLogoutModal}
                         user={user}/>

            <CookieModal cookies={user.steamUser?.loginInfo?.cookies}   
                         isOpen={isCookieModalOpen}
                         closeAction={closeCookieModal}/>
        </SC.User>
    )
}

export default User

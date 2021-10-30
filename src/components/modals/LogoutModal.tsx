import React, { FC, useState } from 'react';
import { IUser } from '../../types/user';
import Modal from 'react-modal';
import { IDefaultModalProps } from '../../types/modal';
import SteamUserService from '../../services/steam-user-service';
import Button from '../UI/Button';
import Error from '../UI/Error';
import Loading from '../UI/Loading';
import { refreshUser } from '../../store/actions/common';
import { useDispatch } from 'react-redux';
import MessageModal from './MessageModal';
import { MessageTypes } from '../../types/message';
import Colors from '../../constants/colors';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { Buttons } from '../../styles/styled-components/button';

interface ILogoutModalProps extends IDefaultModalProps {
    user: IUser;
}

const LogoutModal: FC<ILogoutModalProps> = ({ isOpen, user, closeAction }) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>(null);

    const [isMsgModalOpen, setIsMsgModalOpen] = useState<boolean>(false);

    const openMsgModal = () => {
        setIsMsgModalOpen(true);
    }

    const closeMsgModal = () => {
        setIsMsgModalOpen(false);
    }

    const closeThisModal = () => {
        closeAction.call(null);
    }

    const logoutUser = () => {
        setLoading(true);

        SteamUserService.logout(user.type)
                        .then(() => {
                            refreshUser(user.type, dispatch);
                            openMsgModal();
                            closeThisModal();
                        })
                        .catch(error => setError(error))
                        .finally(() => setLoading(false));
    }

    const ConfirmIcon = () => <AiFillCheckCircle/>
    const CancelIcon = () => <AiFillCloseCircle/>
    
    return (
        <div>
            <Modal isOpen={isOpen}>
                <div>
                    <h2>Log out</h2>
                </div>
                <div style={{ margin: "20px 0" }}>
                    <span>You are going to Log out from {user.name} account</span>
                </div>
                <div>
                    {
                        error ?
                            <Error text={`${error}`} />
                            : <></>
                    }
                    <Buttons direction="row" display="grid" margin="30px 0 0 0">
                        <Button text="Cancel"
                                onClick={closeThisModal}
                                color={Colors.GRAY}
                                Icon={CancelIcon} />
                        <Button text="Confirm"
                                onClick={logoutUser}
                                color={Colors.RED}
                                Icon={ConfirmIcon}
                                loading={loading} />
                    </Buttons>
                </div>
            </Modal>
            <MessageModal title="Success"
                          text={`You have Successfully Logged out from ${user.name} account`}
                          type={MessageTypes.SUCCESS}
                          isOpen={isMsgModalOpen}
                          closeAction={closeMsgModal} />
        </div>
    )
}

export default LogoutModal

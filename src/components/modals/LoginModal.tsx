import React, { FC, useRef, useState } from 'react';
import Modal from 'react-modal';
import { IUser } from '../../types/user';
import { ILoginModel } from '../../models/login';
import Button from '../UI/Button';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import SteamUserService from '../../services/steam-user-service';
import { IDefaultModalProps } from '../../types/modal';
import MessageModal from './MessageModal';
import { MessageTypes } from '../../types/message';
import { refreshUser } from '../../store/actions/common';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/colors';
import { Input } from '../../styles/styled-components/defaults';
import { InputArea } from '../../styles/styled-components/input-area';
import { Buttons } from '../../styles/styled-components/button';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

interface ILoginModalProps extends IDefaultModalProps {
    user: IUser;
}

const LoginModal: FC<ILoginModalProps> = ({ isOpen, user, closeAction }) => {
    const dispatch = useDispatch();
    
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [guard, setGuard] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>(null);

    const [isMsgModalOpen, setIsMsgModelOpen] = useState<boolean>(false);

    const isInputValid = () => login && password && guard;

    const SubmitIcon = () => <AiFillCheckCircle/>
    const CancelIcon = () => <AiFillCloseCircle/>

    const loginUser = () => {
        if (!isInputValid()) {
            setError("Fields cannot be empty");
            return;
        }

        const loginData: ILoginModel = {
            login: login,
            password: password,
            guard: guard
        };

        setLoading(true);

        SteamUserService.login(user.type, loginData)
                        .then(() => {
                            refreshUser(user.type, dispatch);
                            openMsgModal();
                            closeThisModal();
                        })
                        .catch(() => setError("Invalid data"))
                        .finally(() => setLoading(false));
    }

    const closeThisModal = () => {
        closeAction.call(null);

        setLoading(false);
        setError(null);
        setLogin("");
        setPassword("");
        setGuard("");
    }

    const openMsgModal = () => {
        setIsMsgModelOpen(true);
    }

    const closeMsgModal = () => {
        setIsMsgModelOpen(false);
    }

    return (
        <div>
            <Modal isOpen={isOpen}>
                <div>
                    <h2>Log in {user.name} account</h2>
                </div>
                <InputArea>
                    <Input placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
                    <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input placeholder="Guard" value={guard} onChange={(e) => setGuard(e.target.value)} />
                </InputArea>
                <div>
                    <div style={{ minHeight: "30px" }}>
                    {
                        error ?
                            <Error text={`${error}`} />
                            : <></>
                    }
                    </div>
                    <Buttons direction="row" display="grid">
                        <Button text="Cancel"
                            onClick={closeThisModal}
                            disabled={loading}
                            color={Colors.GRAY}
                            Icon={CancelIcon} />
                        <Button text="Submit"
                            onClick={loginUser}
                            disabled={loading}
                            color={Colors.GREEN}
                            loading={loading}
                            Icon={SubmitIcon} />
                    </Buttons>
                </div>
            </Modal>
            <MessageModal title="Success"
                          text={`You have Successfully Logged in ${user.name} account`}
                          type={MessageTypes.SUCCESS}
                          isOpen={isMsgModalOpen}
                          closeAction={closeMsgModal}/>
        </div>
    )
}

export default LoginModal

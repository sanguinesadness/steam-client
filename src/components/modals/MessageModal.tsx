import React, { FC } from 'react';
import { IDefaultModalProps } from '../../types/modal';
import { MessageType, MessageTypes } from '../../types/message';
import Modal from 'react-modal';
import Button from '../UI/Button';
import Colors from '../../constants/colors';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Buttons } from '../../styles/styled-components/button';

interface IMessageModalProps extends IDefaultModalProps {
    title: string;
    text: string;
    type: MessageType;
}

const MessageModal: FC<IMessageModalProps> = ({ 
    title,
    text,
    type,
    isOpen,
    closeAction
 }) => {

    const getPrimaryColor = (): Colors => {
        return type === MessageTypes.ERROR ? Colors.RED :
               type === MessageTypes.SUCCESS ? Colors.GREEN :
               Colors.DARK_BLUE;
    }

    const CloseIcon = () => <AiFillCloseCircle/>

    return (
        <Modal isOpen={isOpen}>
            <div>
                <h2>{title}</h2>
            </div>
            <div style={{ margin: "20px 0" }}>
                <span style={{
                    color: getPrimaryColor()
                }}>{text}</span>
            </div>
            <div>
                <Buttons margin="20px 0 0 0">
                    <Button text="Close" 
                            onClick={closeAction}
                            color={getPrimaryColor()}
                            Icon={CloseIcon}/>
                </Buttons>
            </div>
        </Modal>
    )
}

export default MessageModal

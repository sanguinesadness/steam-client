import React, { FC } from 'react';
import Modal from 'react-modal';
import { IDefaultModalProps } from '../../types/modal';
import { CodeSpace, Row, Key, KeyWrapper, Value, ValueWrapper } from '../../styles/styled-components/code-space';
import Button from '../UI/Button';
import Error from '../UI/Error';
import { cookieStyle } from '../../styles/modal/modal-custom-styles';
import Colors from '../../constants/colors';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Buttons } from '../../styles/styled-components/button';

interface ICookieModalProps extends IDefaultModalProps {
    cookies?: string[];
}

const CookieModal: FC<ICookieModalProps> = ({ cookies, isOpen, closeAction }) => {
    const getKey = (cookie: string) => {
        return cookie.match(/.+?(?==)/);
    }

    const getValue = (cookie: string) => {
        return cookie.match(/=([\s\S]*)$/);
    }

    const CloseIcon = () => <AiFillCloseCircle/>

    return (
        <Modal isOpen={isOpen} style={cookieStyle(Modal.defaultStyles)}>
            <div>
                {
                    cookies ?
                        <CodeSpace bgColor={Colors.BLACK_01}
                                   padding="15px">
                            {
                                cookies.map((cookie, index) => (
                                    <Row key={index}>
                                        <KeyWrapper>
                                            <Key ellipsisFull={true}>{getKey(cookie)}</Key>
                                        </KeyWrapper>
                                        <ValueWrapper>
                                            <Value ellipsisFull={true}>{getValue(cookie)}</Value>
                                        </ValueWrapper>
                                    </Row>
                                ))
                            }
                        </CodeSpace>
                        :
                        <Error text="No Cookies provided" />
                }
            </div>
            <div>
                <Buttons margin="20px 0 0 0">
                    <Button text="Close" 
                            onClick={closeAction}
                            color={Colors.GRAY}
                            Icon={CloseIcon}/>
                </Buttons>
            </div>
        </Modal>
    )
}

export default CookieModal

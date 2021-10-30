import React, { FC } from 'react'
import { ISteamUser } from '../../types/user'
import * as SC from '../../styles/styled-components/user-info';
import { CodeSpace, Row, KeyWrapper, Key, ValueWrapper, Value } from '../../styles/styled-components/code-space';
import Colors from '../../constants/colors';

interface IUserInfoProps {
    user: ISteamUser;
}

const UserInfo: FC<IUserInfoProps> = ({ user }) => {
    return (
        <SC.UserInfo>
            <CodeSpace fontSize="inherit"
                       keyWrapperWidth="130px">
                <Row>
                    <KeyWrapper>
                        <Key>Login</Key>
                    </KeyWrapper>
                    <ValueWrapper>
                        <Value>{user.loginInfo.login || "—"}</Value>
                    </ValueWrapper>
                </Row>
                <Row>
                    <KeyWrapper>
                        <Key>Password</Key>
                    </KeyWrapper>
                    <ValueWrapper>
                        <Value>{user.loginInfo.password || "—"}</Value>
                    </ValueWrapper>
                </Row>
                <Row>
                    <KeyWrapper>
                        <Key>Guard</Key>
                    </KeyWrapper>
                    <ValueWrapper>
                        <Value>{user.loginInfo.guard || "—"}</Value>
                    </ValueWrapper>
                </Row>
                <Row>
                    <KeyWrapper>
                        <Key>Username</Key>
                    </KeyWrapper>
                    <ValueWrapper>
                        <Value>{user.name || "—"}</Value>
                    </ValueWrapper>
                </Row>
                <Row>
                    <KeyWrapper>
                        <Key>ID64</Key>
                    </KeyWrapper>
                    <ValueWrapper>
                        <Value>{user.ID64 || "—"}</Value>
                    </ValueWrapper>
                </Row>
                <Row>
                    <KeyWrapper>
                        <Key>ID32</Key>
                    </KeyWrapper>
                    <ValueWrapper>
                        <Value>{user.ID32 || "—"}</Value>
                    </ValueWrapper>
                </Row>
                <Row>
                    <KeyWrapper>
                        <Key>Trade</Key>
                    </KeyWrapper>
                    <ValueWrapper>
                        <Value>{user.tradeToken || "—"}</Value>
                    </ValueWrapper>
                </Row>
                <Row>
                    <KeyWrapper>
                        <Key>API</Key>
                    </KeyWrapper>
                    <ValueWrapper>
                        <Value>{user.apiKey || "—"}</Value>
                    </ValueWrapper>
                </Row>
            </CodeSpace>
        </SC.UserInfo>
    )
}

export default UserInfo

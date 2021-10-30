import { ILoginInfo, ISteamUser } from '../types/user';

export const extractUserFromResponse = (response: any): ISteamUser => {
    const data = response.data;

    const loginInfo: ILoginInfo = {
        login: data.login_data.login,
        password: data.login_data.password,
        guard: data.login_data.guard,
        sessionId: data.session_id,
        cookies: data.cookies
    };

    const user: ISteamUser = {
        name: data.name,
        ID64: data.id_64,
        ID32: data.id_32,
        apiKey: data.api_key,
        tradeToken: data.trade_token,
        loginInfo: loginInfo
    };

    return user;
}
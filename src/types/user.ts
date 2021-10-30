export const enum UserTypes {
    VICTIM = "victim",
    FAKE = "fake"
};

export type UserType = UserTypes;

export interface IUser {
    id: string | number;
    type: UserType;
    icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    name: string;
    steamUser?: ISteamUser;
}

export interface ISteamUser {
    name: string;
    ID64: string;
    ID32: string;
    tradeToken?: string;
    apiKey?: string;
    loginInfo: ILoginInfo;
}

export interface ILoginInfo {
    login: string;
    password: string;
    guard: string;
    sessionId: string;
    cookies: string[];
}

export interface IUserState {
    user: IUser,
    loading: boolean,
    error: string | null;
}
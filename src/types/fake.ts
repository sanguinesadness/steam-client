import Action from './redux-action';
import { ISteamUser, IUser, IUserState, UserTypes } from './user';

export interface IFake extends IUser {
    type: UserTypes.FAKE
}

export interface IFakeState extends IUserState {
    user: IFake,
}

export const enum FakeActionTypes {
    REQUEST_FAKE = "REQUEST_FAKE",
    RECEIVE_FAKE = "RECEIVE_FAKE",
    REJECT_FAKE = "REJECT_FAKE"
};

export type FakeAction = Action<FakeActionTypes.REQUEST_FAKE> |
                         Action<FakeActionTypes.RECEIVE_FAKE, ISteamUser> |
                         Action<FakeActionTypes.REJECT_FAKE, string>;


// Action-wrappers
export const requestFakeAction = (): FakeAction => ({
    type: FakeActionTypes.REQUEST_FAKE
});

export const receiveFakeAction = (steamUser: ISteamUser): FakeAction => ({
    type: FakeActionTypes.RECEIVE_FAKE,
    payload: steamUser
});

export const rejectFakeAction = (error: string): FakeAction => ({
    type: FakeActionTypes.REJECT_FAKE,
    payload: error
});
import Action from './redux-action';
import { ISteamUser, IUser, IUserState, UserTypes } from './user';

export interface IVictim extends IUser {
    type: UserTypes.VICTIM
}

export interface IVictimState extends IUserState {
    user: IVictim
}

export const enum VictimActionTypes {
    REQUEST_VICTIM = "REQUEST_VICTIM",
    RECEIVE_VICTIM = "RECEIVE_VICTIM",
    REJECT_VICTIM = "REJECT_VICTIM"
};

export type VictimAction = Action<VictimActionTypes.REQUEST_VICTIM> |
                         Action<VictimActionTypes.RECEIVE_VICTIM, ISteamUser> |
                         Action<VictimActionTypes.REJECT_VICTIM, string>;


// Action-wrappers
export const requestVictimAction = (): VictimAction => ({
    type: VictimActionTypes.REQUEST_VICTIM
});

export const receiveVictimAction = (steamUser: ISteamUser): VictimAction => ({
    type: VictimActionTypes.RECEIVE_VICTIM,
    payload: steamUser
});

export const rejectVictimAction = (error: string): VictimAction => ({
    type: VictimActionTypes.REJECT_VICTIM,
    payload: error
});
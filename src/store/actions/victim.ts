import { Dispatch } from "react";
import { receiveVictimAction, rejectVictimAction, requestVictimAction, VictimAction } from "../../types/victim";
import SteamUserService from "../../services/steam-user-service";
import { UserTypes } from "../../types/user";
import { ILoginModel } from "../../models/login";

export const getVictim = () => {
    return async (dispatch: Dispatch<VictimAction>) => {
        try {
            dispatch(requestVictimAction());

            SteamUserService.getUser(UserTypes.VICTIM)
                            .then(user => dispatch(receiveVictimAction(user)))
                            .catch(error => dispatch(rejectVictimAction(error)));
        }
        catch (error) {
            dispatch(rejectVictimAction(error));
        }
    }
}

export const refreshVictim = () => {
    return async (dispatch: Dispatch<VictimAction>) => {
        try {
            dispatch(requestVictimAction());

            SteamUserService.refreshUser(UserTypes.VICTIM)
                            .then(user => dispatch(receiveVictimAction(user)))
                            .catch(error => dispatch(rejectVictimAction(error)));
        }
        catch (error) {
            dispatch(rejectVictimAction(error));
        }
    }
}

export const loginVictim = (data: ILoginModel) => {
    return async (dispatch: Dispatch<VictimAction>) => {
        try {
            dispatch(requestVictimAction());

            SteamUserService.login(UserTypes.VICTIM, data)
                            .then(user => dispatch(receiveVictimAction(user)))
                            .catch(error => dispatch(rejectVictimAction(error)));
        }
        catch (error) {
            dispatch(rejectVictimAction(error));
        }
    }
}
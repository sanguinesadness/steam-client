import { Dispatch } from "react";
import { FakeAction, receiveFakeAction, rejectFakeAction, requestFakeAction } from "../../types/fake";
import SteamUserService from "../../services/steam-user-service";
import { UserTypes } from "../../types/user";
import { ILoginModel } from "../../models/login";

export const getFake = () => {
    return async (dispatch: Dispatch<FakeAction>) => {
        try {
            dispatch(requestFakeAction());

            SteamUserService.getUser(UserTypes.FAKE)
                            .then(user => dispatch(receiveFakeAction(user)))
                            .catch(error => dispatch(rejectFakeAction(error)));
        }
        catch (error) {
            dispatch(rejectFakeAction(error));
        }
    }
}

export const refreshFake = () => {
    return async (dispatch: Dispatch<FakeAction>) => {
        try {
            dispatch(requestFakeAction());

            SteamUserService.refreshUser(UserTypes.FAKE)
                            .then(user => dispatch(receiveFakeAction(user)))
                            .catch(error => dispatch(rejectFakeAction(error)));
        }
        catch (error) {
            dispatch(rejectFakeAction(error));
        }
    }
}

export const loginFake = (data: ILoginModel) => {
    return async (dispatch: Dispatch<FakeAction>) => {
        try {
            dispatch(requestFakeAction());

            SteamUserService.login(UserTypes.FAKE, data)
                            .then(user => dispatch(receiveFakeAction(user)))
                            .catch(error => dispatch(rejectFakeAction(error)));
        }
        catch (error) {
            dispatch(rejectFakeAction(error));
        }
    }
}
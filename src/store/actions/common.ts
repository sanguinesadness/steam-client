import { Dispatch } from "react";
import { UserType, UserTypes } from "../../types/user";
import { refreshFake } from "./fake";
import { refreshVictim } from "./victim";

export const refreshUser = (userType: UserType, dispatch: Dispatch<any>) => {
    switch (userType) {
        case UserTypes.FAKE:
            dispatch(refreshFake());
            break;
        case UserTypes.VICTIM:
            dispatch(refreshVictim());
            break;
    }
}

export const refreshUsers = (dispatch: Dispatch<any>) => {
    dispatch(refreshFake());
    dispatch(refreshVictim());
}
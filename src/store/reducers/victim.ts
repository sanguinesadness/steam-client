import { victim } from '../../data/users';
import { IVictimState, VictimAction, VictimActionTypes } from "../../types/victim";

const initialState: IVictimState = {
    user: victim,
    loading: false,
    error: null
};

export const victimReducer = (state = initialState, action: VictimAction): IVictimState => {
    switch (action.type) {
        case VictimActionTypes.REQUEST_VICTIM:
            return { ...state, loading: true, error: null };
        case VictimActionTypes.REJECT_VICTIM:
            return { user: victim, loading: false, error: action.payload };
        case VictimActionTypes.RECEIVE_VICTIM:
            return { user: {...state.user, steamUser: action.payload }, loading: false, error: null };
        default:
            return state;
    }
}
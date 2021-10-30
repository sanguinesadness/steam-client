import { fake } from '../../data/users';
import { FakeAction, FakeActionTypes, IFakeState } from "../../types/fake";

const initialState: IFakeState = {
    user: fake,
    loading: false,
    error: null
};

export const fakeReducer = (state = initialState, action: FakeAction): IFakeState => {
    switch (action.type) {
        case FakeActionTypes.REQUEST_FAKE:
            return { ...state, loading: true, error: null };
        case FakeActionTypes.REJECT_FAKE:
            return { user: fake, loading: false, error: action.payload };
        case FakeActionTypes.RECEIVE_FAKE:
            return { user: {...state.user, steamUser: action.payload }, loading: false, error: null };
        default:
            return state;
    }
}
import { combineReducers } from 'redux';
import { victimReducer } from './victim';
import { fakeReducer } from './fake';

export const rootReducer = combineReducers({
    victim: victimReducer,
    fake: fakeReducer   
});

export type RootState = ReturnType<typeof rootReducer>;
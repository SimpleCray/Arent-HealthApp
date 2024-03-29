import { AppActionTypes } from './app.types';

const initialState = {
    testAppReducer: 'initial',
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppActionTypes.TEST_ACTION:
            return {
                ...state,
                testAppReducer: action.payload,
            };

        default:
            return state;
    }
};

export default appReducer;

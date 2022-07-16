import { AppActionTypes } from './app.types';

export const testAction = (value) => ({
    type: AppActionTypes.TEST_ACTION,
    payload: value,
});

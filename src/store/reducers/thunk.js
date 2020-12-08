import { setNewValue } from "./actions";

export const setNewValueThunk = (value) => {
    return (dispatch, getState) => {
        // logic
        dispatch(setNewValue(value))
    }
}

import { getToken } from "./actions";

export const getTokenThunk = (tokenThunk) => {
    const { token } = tokenThunk;
    return (dispatch, getState) => {
        if(token) {
            localStorage.setItem("token", token)
            dispatch(getToken(token))
        }
    }
}

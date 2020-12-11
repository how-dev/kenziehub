import { addFav } from "./actions";

export const addFavThunk = (user) => {
    return (dispatch, getState) => {
            localStorage.setItem("favoriteList", JSON.stringify(user))
            dispatch(addFav(user))
        }
}

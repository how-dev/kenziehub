import { addFav } from "./actions";

export const addFavThunk = (user) => {
    return (dispatch, getState) => {
            localStorage.setItem("@kenzieHub/favoriteList", JSON.stringify(user))
            dispatch(addFav(user))
        }
}

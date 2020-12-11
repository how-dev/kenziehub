const favoriteList = {
    favorite: JSON.parse(localStorage.getItem("@kenzieHub/favoriteList")) || [],
  };
  
  const tokenReducer = (state = favoriteList, action) => {
    switch (action.type) {
      case "@FAVORITE/newFav":
        return [...state.favorite, action.user];
      default:
        return state;
    }
  };
  
  export default tokenReducer;
  
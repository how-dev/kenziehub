const userReducer = (state = "", action) => {
  switch (action.type) {
    case "@ID/getUser":
      return action.user;
    default:
      return state;
  }
};

export default userReducer;

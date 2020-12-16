const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "@ID/getUser":
      return action.user;

    case "@ID/getUsers":
      const { users } = action;

      return [...state, users];
    default:
      return state;
  }
};

export default usersReducer;

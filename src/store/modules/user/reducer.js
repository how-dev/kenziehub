const userReducer = (
  state = JSON.parse(localStorage.getItem("userData")) || "",
  action
) => {
  switch (action.type) {
    case "@USER/login":
      return action.user;
    case "@USER/logout":
      return {};
    default:
      return state;
  }
};

export default userReducer;

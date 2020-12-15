const theToken = localStorage.getItem("token") || "";

const tokenReducer = (state = theToken, action) => {
  switch (action.type) {
    case "@TOKEN/newToken":
      const { token } = action;
      return token;
    case "@TOKEN/logout":
      return "";
    default:
      return state;
  }
};

export default tokenReducer;

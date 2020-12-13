const theToken = {
  key: localStorage.getItem("token") || ""
};

const tokenReducer = (state = theToken, action) => {
  switch (action.type) {
    case "@TOKEN/newToken":
      const { token } = action;
      return { key: token };
    case "@TOKEN/logout":
      return "";
    default:
      return state;
  }
};

export default tokenReducer;

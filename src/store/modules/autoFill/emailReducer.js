const autoFillEmailReducer = (state = "", action) => {
    switch (action.type) {
      case "@autoFill/ADDAUTOFILLEMAIL":
        const { autoFillEmail } = action;
        return autoFillEmail;
      default:
        return state;
    }
  };

  export default autoFillEmailReducer;
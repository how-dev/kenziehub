const autoFillPswdReducer = (state = "", action) => {
    switch (action.type) {
      case "@autoFill/ADDAUTOFILLPSWD":
        const { autoFillPswd } = action;
        return autoFillPswd;
      default:
        return state;
    }
  };

  export default autoFillPswdReducer;
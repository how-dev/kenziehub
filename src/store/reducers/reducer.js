const theToken = {
    key: localStorage.getItem("token") || "",
};

const setToken = (state = theToken, action) => {
    switch(action.type) {
        case "@TOKEN/newToken":
            const { token } = action;
            return { key: token };
        default:
            return state;
    };
};

export default setToken;

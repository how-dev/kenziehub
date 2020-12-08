const defaultState = [{ key: "value" }];

const newState = (state = defaultState, action) => {
    switch(action.type) {
        case "test":
            const { newValue } = action;
            return [...state, newValue];
        default:
            return state;
    };
};

export default newState;

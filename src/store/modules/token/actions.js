export const getToken = (token) => ({ type: "@TOKEN/newToken", token });

export const removeToken = () => ({ type: "@TOKEN/logout" });

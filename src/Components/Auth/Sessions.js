
export const setUserSession = (user, accessToken) => {
    sessionStorage.setItem('user', JSON.stringify(user))
    sessionStorage.setItem('accessToken', accessToken)
}
export const getToken = () => {
    return sessionStorage.getItem('accessToken') || null;
}
export const getRole = () => {

}
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}
export const removeUserSession = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('user');
}



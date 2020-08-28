let authenticateAccount = (obj, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('auth', JSON.stringify(obj));
        next();
    }
};
let isAuthenticatedAccount = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('auth')) {
        return JSON.parse(localStorage.getItem('auth'));
    } else {
        return false;
    }
};

module.exports = {
    isAuthenticatedAccount,
    authenticateAccount
}
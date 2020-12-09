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

let signoutAccount = () => {
    localStorage.clear('auth')
    sessionStorage.clear('auth')
}

module.exports = {
    isAuthenticatedAccount,
    authenticateAccount,
    signoutAccount
}
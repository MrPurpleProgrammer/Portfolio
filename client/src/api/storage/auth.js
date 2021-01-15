
import {API_GetAccount} from '../account'

export function API_AuthenticateAccount(obj, next) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('auth', JSON.stringify(obj));
        next();
    }
};

export function API_IsAuthenticatedAccount() {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('auth')) {
        return JSON.parse(localStorage.getItem('auth'));
    } else {
        return false;
    }
};

export function API_SignoutAccount() {
    localStorage.clear('auth')
    sessionStorage.clear('auth')
}

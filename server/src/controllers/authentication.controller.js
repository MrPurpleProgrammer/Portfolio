const authService = require('../services/authentication.service');

let userSignup = async (req, res) => {
    let doesUserExist = await authService.doesUserExist(req);
    if (doesUserExist.status == 410) {
            const newAccount = await authService.setNewAccount(req);
            if(newAccount.status == 200 ) res.json({ accountId: newAccount, message: 'New Account Created!' });
            else{
                return res.status(newAccount.status).json({ error: newAccount.error, message: 'Account not Created!' });
            }     
    }
}

let userLogin = async (req, res, loginType) => {
    if(loginType == 'web3') { let user = await authService.authenticateWeb3Login(); }
    else { 
        let resp = await authService.authenticateUserLogin(req); 
        if (resp.status == 200) {
            res.cookie("authLoginToken", resp.token, {expire: resp.expiration});
            return res.status(200).json({
                token: resp.token, 
                res: {uid: resp.uid, username: resp.username, account: resp.account, status: resp.status, error: resp.error}
            });
        }
        else return res.status(resp.status).json({
            token: null, 
            res: {uid: null, username: null, account: null, status: resp.status, error: resp.error}
        })
    }
}


let isAllowed = (req, res, next) => {
    console.log(req);
    auth = authService.isAccountAllowed;
    return auth;
} 

module.exports = {
    userSignup,
    userLogin,
    isAllowed,
}
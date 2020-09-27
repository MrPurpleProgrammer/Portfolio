let getAccount = async (token, accountId) => {
    let url = process.env.REACT_APP_SERVER_API_URL + 'account/read/' + accountId;
    let resp = await fetch(url, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
            Authorization: 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then((resp) => {
            return { account: resp.account, user: resp.user, error: null }
        })
        .catch(err => {
            return { account: null, user: null, error: err }
        });
    return resp
}

module.exports = {
    getAccount,
}
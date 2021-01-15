export async function API_GetAccount(token, accountId) {
    let url = process.env.REACT_APP_SERVER_API_URL + '/account/read/' + accountId;
    let resp = await fetch(url, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
            Authorization: 'Bearer ' + token
        },
    }).then(res => res.json()).then(resp => { return resp })
    return resp;
}

export async function API_Web2Login(formData) {
    let url = process.env.REACT_APP_SERVER_API_URL + '/auth/user/web2/login';
    let resp = fetch(url, {
        mode: 'cors',
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    }).then(res => res.json()).then(resp => { return resp })
    return resp;
}

export async function API_Signup(formData) {
    let url = process.env.REACT_APP_SERVER_API_URL + '/auth/create/user';
    let resp = fetch(url, {
        mode: 'cors',
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(resp => { return resp }).catch((err) => {
        console.log(err);
    })
    return resp;
}

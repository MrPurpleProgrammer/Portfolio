import { json } from "is_js";

export async function API_GetAssetHash(formData) {
    let auth = JSON.parse(localStorage.getItem('auth'));
    let url = process.env.REACT_APP_SERVER_API_URL + '/upload/generate/assetHash';
    let resp = fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + auth.token
        },
        body: formData,
    }).then(res => res.json()).then((resp) => { return resp });
    return resp
}

export async function API_UploadMediaForm(formData) {
    let auth = JSON.parse(localStorage.getItem('auth'));
    let url = process.env.REACT_APP_SERVER_API_URL + '/upload/create/';
    let resp = fetch(url, {
        mode: 'cors',
        method: 'post',
        headers: {
            Authorization: 'Bearer ' + auth.token
        },
        body: formData,
    }).then(res => res.json()).then((resp) => { return resp });
    return resp
}
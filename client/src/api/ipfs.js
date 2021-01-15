export async function API_GetMediaByIpfs(ipfsUrl) {
    let url = process.env.REACT_APP_SERVER_API_URL + '/ipfs/read/media/' + ipfsUrl;
    let resp = fetch(url, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
        }
    }).then(res => res.json()).then((resp) => {return resp});
    return resp
}

export function API_GetShareableUrl(mediaUrl) {
    let url = process.env.REACT_APP_SERVER_API_URL + '/ipfs/share/post/' + mediaUrl;
    let resp = fetch(url, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
        }
    }).then(res => res.json()).then((resp) => {return resp});
    return resp
}
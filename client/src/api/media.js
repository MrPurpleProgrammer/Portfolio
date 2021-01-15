export async function API_GetDetectionReport(mediaId) {
    let url = process.env.REACT_APP_SERVER_API_URL + '/spider/detect/web/' + mediaId;
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
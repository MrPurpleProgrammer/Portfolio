import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { API_IsAuthenticatedAccount } from '../auth';
import { API_GetAccount } from "../../account.js";
import loader from '../../../assets/SVG/loader.svg';
import { Transition, CSSTransition } from 'react-transition-group';

function AuthGuard(props) {
    let [Auth, setAuth] = useState({ account: null, user: null, portfolio: [], loading: null, token: null });
    let history = useHistory();

    let handleAuthentication = () => {
        setAuth({ ...Auth, loading: true })
        let isAuthenticated = API_IsAuthenticatedAccount();
        if (isAuthenticated !== false) {
            let accountId = isAuthenticated.res.account._id;
            let token = isAuthenticated.token;
            API_GetAccount(token, accountId)
                .then((resp) => {
                    setAuth({ account: resp.account, user: resp.user, portfolio: resp.user.portfolio, loading: false, token: token });
                });
        }
        else {
            history.push('/Client/Login');
        }
    }

    const defaultStyle = {
        transition: `opacity 600s ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0.5 },
        exited: { opacity: 0 },
    };

    useEffect(() => {
        handleAuthentication();
    }, []);

    if (Auth.loading === true || Auth.loading === null) {
        return (
                    <div className="accountSceneContainer"
                        >
                        <div className="loadingDiv">
                            <img src={loader} />
                        </div>
                    </div>
        )
    }
    if (Auth.loading === false) {
        return (
            <Transition in={true} timeout={600}>

                {state => (
                    <div className="accountSceneContainer"
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                        <props.component {...props} auth={Auth} />
                    </div>
                )}

            </Transition>
        )
    }
}
    export default AuthGuard
import React, { useState, useEffect } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { setUserSession, getToken } from './Sessions'
import { FaFacebook } from 'react-icons/fa';

const FbLogin = () => {
    const [isLogged, setIsLogged] = useState()
    const appId = process.env.REACT_APP_FB_APP_ID
    let fbContent

    useEffect(() => {
        if (getToken()) setIsLogged(true)
        else setIsLogged(false)

    }, [])

    const responseFacebook = (res) => {
        console.log('res', res)
        if (res) {
            setIsLogged(true)
            const user = {
                id: res.userID,
                name: res.name,
                email: res.email
            }
            setUserSession(user, res.accessToken);
        }
    }

    if (isLogged) {
        // ..... 
    }
    else {
        fbContent = (
            <FacebookLogin
                appId={appId}
                autoLoad={false}
                fields="name,email"
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="btn btn-outline">Kirjaudu <FaFacebook/> </button>
                )}
            />
        )
    }
    return (
        <div>
            {fbContent}
        </div>
    )
}

export default FbLogin
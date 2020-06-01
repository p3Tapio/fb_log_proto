import React from 'react'
import { Link } from 'react-router-dom'
import {removeUserSession} from '../Auth/Sessions'
const UserPage = () => {

    return (
        <div>
            <p>Olen salainen sivu</p>
            <Link to={'/'} className="nav-link" onClick={() => removeUserSession()}>Kirjaudu ulos</Link>
        </div>
    )
}
export default UserPage
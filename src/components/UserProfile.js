import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'


export default function UserProfile() {
    const { user } = useAuth0();

    return (
        <div className="sidebar">
            <div className="container m-8 p-8"></div>
            <h2>Welcome, {user.given_name}!</h2>
            {/* // <JSONPretty data={ user }/> */}
        </div>
    )
}
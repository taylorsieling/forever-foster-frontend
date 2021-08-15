import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    // width: '4rem',
    // padding: '1rem',
    // fontSize: '1rem',
    // letterSpacing: '0.3rem',
    // textDecoration: 'none',
    // fontWeight: 'bold',
    // color: '#faf7f1',
}

const Navigation = () => {

    const { loginWithRedirect,logout,user,isLoading } = useAuth0();

    return (
        <div className="flex items-center justify-between flex-wrap bg-red-900">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <span className="font-semibold text-gray-500 text-xl tracking-tight">Forever Foster</span>
            </div>

            <div><h4>FOREVER FOSTER</h4></div>

            <div>
                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                HOME
                </NavLink>

                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                FEATURES
                </NavLink>

                {!isLoading && !user && (
                    <button
                        className="login"
                        onClick={() => loginWithRedirect()}
                    >Log In</button>
                )}

                {!isLoading && user && (
                    <button
                        className="login"
                        onClick={() => logout()}
                    >Log Out</button>
                )}

            </div>

                {/* <NavLink
                    to="/kittens"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                LOGIN
                </NavLink> */}

                {/* <NavLink
                    to="/intake"
                    exact
                    style={button}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
                    }}
                >
                SIGN UP
                </NavLink> */}

        </div>

    )
}

export default Navigation;

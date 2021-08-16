import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '4rem',
    padding: '0.4rem 0 0.4rem 2rem',
    fontSize: '1rem',
    textDecoration: 'none',
    color: 'black',
}

const Navigation = () => {

    const { loginWithRedirect,logout,user,isLoading } = useAuth0();

    return (
        <nav class="flex items-center justify-between p-6 h-20 bg-white shadow-sm bg-lpeach px-20">
            <div>
                <span className="text-2xl tracking-tight font-display justify-start">Forever Foster</span>
                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                    }}
                >
                Home
                </NavLink>
                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                    }}
                >
                Features
                </NavLink>
                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                    }}
                >
                About
                </NavLink>
                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                    }}
                >
                Contact
                </NavLink>

                {/* <div class="sm:hidden space-y-1 hover:cursor-pointer">
                    <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
                    <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
                    <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
                </div> */}

            </div>

            <div>

                {!isLoading && !user && (
                    <div>
                        <button
                        className="text-base px-8 py-2"
                        onClick={() => loginWithRedirect()}
                        >Login</button>

                        <button
                        className="bg-peach text-base px-3 py-2 text-white rounded-lg"
                        onClick={() => loginWithRedirect()}
                        >Get Started</button>
                    </div>
                )}

                {!isLoading && user && (
                    <button
                        className="bg-peach text-base px-3 py-2 text-white rounded-lg"
                        onClick={() => logout()}
                    >Log Out</button>
                )}
            </div>

        </nav>
    )
}

export default Navigation;

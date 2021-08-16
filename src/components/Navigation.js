import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '4rem',
    padding: '0.4rem 0 0.4rem 1.4rem',
    fontSize: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
}

const Navigation = () => {

    const { loginWithRedirect,logout,user,isLoading } = useAuth0();

    return (
        <>
        <nav class="flex items-center justify-between p-6 h-20 bg-white shadow-sm bg-peach">
            <div>
                <span className="font-semibold text-2xl tracking-tight font-display justify-start">Forever Foster</span>
                <NavLink
                    to="/"
                    exact
                    style={navbar}
                    activeStyle={{
                        textdecoration: 'underline',
                        fontWeight: 'bold',
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
                        fontWeight: 'bold',
                    }}
                >
                Features
                </NavLink>
            </div>
            <ul>
            <li class="space-x-5 text-xl">
                <a href="#" class="hidden sm:inline-block text-gray-700 hover:text-indigo-700">Home</a>
                <a href="#" class="hidden sm:inline-block text-gray-700 hover:text-indigo-700">About</a>
                <a href="#" class="hidden sm:inline-block text-gray-700 hover:text-indigo-700">Servics</a>
                <a href="#" class="hidden sm:inline-block text-gray-700 hover:text-indigo-700">Products</a>
            </li>
            <div class="sm:hidden space-y-1 hover:cursor-pointer">
                <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
                <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
                <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
            </div>
            </ul>
        </nav>

        <div className="flex items-center justify-between flex-wrap bg-peach">
            <div className="mx-8 my-4">
                <div className="float-left">
                    
                    <div >
                        

                        

                    </div>
                </div>
                <div className="float-left">
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
            </div>
        </div>
            </>
    )
}

export default Navigation;

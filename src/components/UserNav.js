import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function UserNav() {
    const { user } = useAuth0();

    return (
        <>
        <div className="fixed flex flex-col top-0 left-0 h-full p-8">
            <div className="flex items-center text-center pl-6 pb-10 h-20">
                <img src={user.picture} alt="User profile image" class="rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-blkgray"/>
                <div class="ml-1">
                    <p class="ml-1 text-md font-medium text-xl tracking-wide truncate text-blkgray">{user.name}</p>
                </div>
            </div>
            <div>
                <ul>
                    <li class="px-5">
                        <div class="flex flex-row items-center h-8">
                            <a href="#" class="relative flex flex-row items-center h-11 hover:font-semibold border-l-4 border-transparent pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                </span>
                                <span class="ml-2 text-base my-4 tracking-wide uppercase">Dashboard</span>
                            </a>
                        </div>
                    </li>
                    <li class="px-5">
                        <div class="flex flex-row items-center h-8">
                            <a href="#" class="relative flex flex-row items-center h-11 hover:font-semibold border-l-4 border-transparent pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                </span>
                                <span class="ml-2 text-base my-4 tracking-wide uppercase">Litters</span>
                            </a>
                        </div>
                    </li>
                    <li class="px-5">
                        <div class="flex flex-row items-center h-8">
                            <a href="#" class="relative flex flex-row items-center h-11 hover:font-semibold border-l-4 border-transparent pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                </span>
                                <span class="ml-2 text-base my-4 tracking-wide uppercase">Kittens</span>
                            </a>
                        </div>
                    </li>
                    <li class="px-5">
                        <div class="flex flex-row items-center h-8">
                            <a href="#" class="relative flex flex-row items-center h-11 hover:font-semibold border-l-4 border-transparent pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                </span>
                                <span class="ml-2 text-base my-4 tracking-wide uppercase">Applications</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
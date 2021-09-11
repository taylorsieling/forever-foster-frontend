import React from 'react'
import UserNav from '../components/UserNav'

export default function Dashboard() {
    return (
        <div className="flex bg-white">
            <div className="min-h-screen max-w-xs w-2 flex flex-col flex-auto bg-white antialiased text-blkgray"><UserNav/></div>
            <div className="flex flex-grow flex-col rounded-tl-3xl shadow-md bg-rosewater text-blkgray"><h2>yada yada yada yada</h2></div>
        </div>
    )
}
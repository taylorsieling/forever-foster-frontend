import React from 'react'
import UserNav from '../components/UserNav'

export default function Dashboard() {
    return (
        <div className="flex">
            <div className="min-h-screen max-w-xs w-2 flex flex-col flex-auto bg-mint antialiased text-blkgray"><UserNav/></div>
            <div className="flex-grow rounded-3xl bg-white"><h2>yada yada yada yada</h2></div>
        </div>
    )
}
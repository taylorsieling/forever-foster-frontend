import React from 'react'
import UserNav from '../components/UserNav'
import SummaryCard from './SummaryCard'

export default function Dashboard() {
    return (
        <div className="flex bg-white">
            <div id="sidenav" className="min-h-screen max-w-xs w-2 flex flex-col flex-auto bg-white antialiased text-blkgray">
                <UserNav/>
            </div>
            <div id="maindash" className="flex flex-grow flex-col rounded-tl-3xl shadow-md bg-rosewater text-blkgray p-8">
                <div id="topbar" className="flex flex-row justify-end gap-4 items-end">
                    <div><button className="flex-grow bg-melon text-base px-8 py-2 text-white rounded-lg">+ Kitten</button></div>
                    <div><button className="flex-grow bg-melon text-base px-8 py-2 text-white rounded-lg">+ Litter</button></div>
                    <div><input type="text" className="px-4 py-1 text-lg text-left placeholder-warmgray placeholder-opacity-50 rounded-lg" placeholder="Search"/></div>
                </div>
                <div>
                    <SummaryCard/>
                    <SummaryCard/> 
                    <SummaryCard/>
                </div>
            </div>
        </div>
    )
}
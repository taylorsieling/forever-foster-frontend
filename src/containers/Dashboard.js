import React from 'react'
import UserNav from '../components/UserNav'
import SummaryCard from './SummaryCard'

export default function Dashboard() {
    return (
        <div className="flex bg-white">
            <div className="min-h-screen max-w-xs w-2 flex flex-col flex-auto bg-white antialiased text-blkgray">
                <UserNav/>
            </div>
            <div className="flex flex-grow flex-col rounded-tl-3xl shadow-md bg-rosewater text-blkgray p-8">
                <div className="h-24"><SummaryCard/></div>
                <div>
                    <SummaryCard/>
                    <SummaryCard/>
                    <SummaryCard/>
                </div>
            </div>
        </div>
    )
}
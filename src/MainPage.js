import React from 'react'
import NavBar from './componenets/app/NavBar'
import BestCompanies from './componenets/mainPage/BestCompanies'
import RecentCompanies from './componenets/mainPage/RecentCompanies'
import TagsCloud from './componenets/mainPage/TagsCloud'

export default function MainPage() {
    return (
        <div>
            <NavBar />
            <TagsCloud />
            <BestCompanies />
            <RecentCompanies />
        </div>
    )
}
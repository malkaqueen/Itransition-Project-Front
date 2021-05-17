import React from 'react'
import NavBar from './componenets/app/NavBar'
import BestCompanies from './mainPage/BestCompanies'
import RecentCompanies from './mainPage/RecentCompanies'
import TagsCloud from './mainPage/TagsCloud'

export default function MainPage() {
    return (
        <div className='container-fluid'>
            <NavBar />
            <TagsCloud />
            <BestCompanies />
            <RecentCompanies />
        </div>
    )
}
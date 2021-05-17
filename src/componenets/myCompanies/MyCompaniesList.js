import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyComps } from '../../redux/actions'
import CompanyCard from '../mainPage/CompanyCard'

export default function MyCompaniesList() {
    const dispatch = useDispatch()
    const myComps = useSelector(state => state.my.companies)
    const userId = useSelector(state => state.user.id)

    useEffect(() => {
        dispatch(fetchMyComps(userId))
    }, [dispatch, userId])

    if (!myComps)
        return(<div>
            Loading...
        </div>)

    return (
        <div className='container'>
            <h2>
                My Companies
            </h2>
            <div className='d-flex justify-content-center m-5'>
                {myComps.map(company => <CompanyCard
                    id={company.id}
                    company={company}
                    className='m-2'
                />)}
            </div>
        </div>
    )
}
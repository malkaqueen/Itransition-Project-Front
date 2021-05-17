import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StarRating from './StarRating'
import CompanyNavBar from './CompanyNavBar'
import { fetchAuthor } from '../../redux/actions'
import Tags from './Tags'

export default function CompanyHeader({ company }) {
    const dispatch = useDispatch()
    const author = useSelector(state => state.company.author)
    const creationDate = new Date(company.company.creationDate).toLocaleDateString()

    useEffect(() => {
        dispatch(fetchAuthor(company.company.userId))
    }, [company.company.userId, dispatch])

    return (<div>
        <CompanyNavBar />
        <div className='row ms-5 mt-5'>
            <div className='row col-lg-6 col-sm-2'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>{company.company.name}</h1>
                    </div>
                    <div className='row'>
                        <StarRating rating={company.averageRating} />
                    </div>
                    <div className='row'>
                        <div className='m-1'>{`By ${author} on ${creationDate}`}</div>
                        <div className='m-1'>{company.categoryName}</div>
                        <div className='m-1'>{company.company.currentSum}/{company.company.targetSum}</div>
                    </div>
                    <Tags tags={company.companyTags}/>
                </div>
            </div>
        </div>
    </div>)
}
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCompany } from './redux/actions'
import CompanyHeader from "./componenets/company/CompanyHeader"
import Description from "./componenets/company/Description"
import NavBar from "./componenets/app/NavBar"
import Bonuses from './componenets/company/Bonuses'
import Video from './componenets/company/Video'
import Comments from './componenets/company/Comments'
import Photo from './componenets/company/Photo'

export default function Company() {
    const { companyId } = useParams()
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.userId)
    const company = useSelector(state => state.company.company)

    useEffect(() => {
        dispatch(fetchCompany(companyId, userId))
        console.log(companyId)
    }, [companyId, dispatch, userId]);

    console.log(company)

    return (
        <div className='container-fluid'>
            <NavBar />

            { (company)
                ?
                <div>
                    <CompanyHeader company={company} />
                    <hr />
                    <div className='row'>
                        <div className='col-6'>
                            <Description description={company.company.description} />
                        </div>
                        <div className='col-6'>
                            <Photo photo={company.companyPhoto[0].photoUrl} />
                            <Video video={company.companyVideo.videoUrl} />
                        </div>
                    </div>
                    <Bonuses companyId={companyId} />
                    <Comments companyId={companyId} userId={userId} />
                </div>
                :
                <div>
                    Loading...
            </div>
            }


        </div>)
}

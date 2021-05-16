import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchCompany } from './redux/actions'
import CompanyHeader from "./componenets/company/CompanyHeader"
import Description from "./componenets/company/Description"
import NavBar from "./componenets/app/NavBar"
import Bonuses from './componenets/company/Bonuses'
import Video from './componenets/company/Video'
import Comments from './componenets/company/Comments'

export default function Company({ companyId, userId }) {
    const dispatch = useDispatch()
    const company = useSelector(state => state.company.company)
    useEffect(() => {
        dispatch(fetchCompany(companyId))
    }, [companyId, dispatch]);

    return (<div className='container-fluid'>
        <NavBar />
        <CompanyHeader company={company} />
        <div className='row'>
            <div className='col-6'>
                <Description description={company.description} />
            </div>
            <div className='col-6'>
                <Video />
            </div>
        </div>
        <Bonuses />
        <Comments companyId={companyId} userId={userId} />
    </div>)
}

/*function mapDispatchToProps (dispatch) {
    return
    {
        company: (companyId) => {
            dispatch(fetchCompany(companyId))
        }
    }
}

export default connect(null, mapDispatchToProps)(Company)*/

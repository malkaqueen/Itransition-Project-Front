import React, {useEffect} from "react"
import NavBar from "./componenets/NavBar"
import CompanyHeader from "./componenets/CompanyHeader"
import Description from "./componenets/Description"
import {useDispatch, useSelector} from 'react-redux'
import {fetchCompany} from './redux/actions'
import Bonuses from './componenets/Bonuses'
import Video from './componenets/Video'
import Comments from './componenets/Comments'

export default function Company({ companyId }) {
    const dispatch = useDispatch()
    const company = useSelector(state => state.company.company)
    useEffect(() => {
            dispatch(fetchCompany(companyId))
    }, [companyId, dispatch]);

    return (<div className='container-fluid'>
        <NavBar/>
        <CompanyHeader company={company}/>
        <div className='row'>
            <div className='col-6'>
                <Description description={company.description}/>
            </div>
            <div className='col-6'>
                <Video/>
            </div>
        </div>
        <Bonuses/>
        <Comments/>
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

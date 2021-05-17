import React, { Component } from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import MainPage from './MainPage'
import MyCompanies from './MyCompanies'
import AllCompanies from './AllCompanies'
import CreateCompany from './CreateCompany'
import Company from './Company'
import LogIn from './LogIn'
import Register from './Register'
import RegistrationProcess from './componenets/register/RegistrationProcess'
import AdminPage from './AdminPage'

class App extends Component {
    render() {
        const { history } = this.props

        return (
            <div className="App">
                <Switch>
                    <Route history={history} exact path='/home' component={MainPage} />
                    <Route history={history} exact path='/my_companies' component={MyCompanies} />
                    <Route history={history} exact path='/all_companies' component={AllCompanies} />
                    <Route history={history} exact path='/create' component={CreateCompany} />
                    <Route history={history} exact path='/log_in' component={LogIn} />
                    <Route history={history} exact path='/register' component={Register} />
                    <Route history={history} exact path='/registration_process' component={RegistrationProcess} />
                    <Route history={history} exact path='/company/:companyId' render={(props) => <Company {...props} />} />
                    <Route history={history} exact path='/admin_page' component={AdminPage} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </div>
        )
    }
}

export default App

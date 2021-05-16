/* eslint-disable no-lone-blocks */
import React from 'react'

export default class Modal extends React.Component {
    state = {
        isOpen: false,
        loggedIn: false
    }

    render() {
        return (
            <React.Fragment>

                {
                    (this.state.loggedIn)
                        ?
                        <div>
                            <p className='text-white'>You are welcome, Maria Shepelevich</p>
                            <button
                                className='btn btn-outline-secondary ms-5'
                                onClick={() => this.setState({ loggedIn: false })}
                            >
                                Log Out
                            </button>
                        </div>
                        :
                        <button
                            className='btn btn-outline-secondary ms-5'
                            onClick={() => this.setState({ isOpen: !this.state.isOpen, loggedIn: this.state.loggedIn===false && this.state.isOpen===true })}
                        >Log IN</button>
                }


                {
                    this.state.isOpen
                    && (
                        <div>
                            <div>
                                <input type='email'></input>
                                <input type='password'></input>
                            </div>
                        </div>
                    )
                }
            </React.Fragment >
        )
    }
}

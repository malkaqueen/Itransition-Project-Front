import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { fullTextSearch } from '../../redux/actions'
import styles from '../../styles/Search.css'

export default function Search({ value = '', onChange }) {
    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const history = useHistory()

    console.log(searchString, formSubmitted)

    function updateSearchString(event) {
        setSearchString(event.target.value)
        if (typeof onChange === 'function') {
            onChange(event.target.value);
        }
    }

    <style>{styles}</style>

    if (formSubmitted)
        return (
            <Redirect to='/all_companies' />
        )

    return (
        <form
            className='search-form'

            onSubmit={() => {
                dispatch(fullTextSearch(searchString))
                setFormSubmitted(true)
            }}
        >
            <input
                type='text'
                value={searchString}
                className='search-input'
                onChange={updateSearchString}
            />
            <i className='fa fa-search'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor'
                    className='bi bi-search' viewBox='0 0 24 27'>
                    <path
                        d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
            </i>
        </form>
    )
}
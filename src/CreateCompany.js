import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'react-datepicker/dist/react-datepicker.css'
import NavBar from './componenets/app/NavBar'
import TagsInput from './componenets/createCompany/TagsInput'
import ExpirationDate from './componenets/createCompany/ExpirationDate'
import { fetchCategories, createCompany } from './redux/actions'
import CategoryPicker from './componenets/createCompany/CategoryPicker'
import ImageDnD from './componenets/createCompany/ImageDnD'

export default function CreateComapny({ value = 0, onChange }) {
    const dispatch = useDispatch()
    const date = useSelector(state => state.createCompany.expirationDate)
    const category = useSelector(state => state.createCompany.categoryId)
    const tags = useSelector(state => state.createCompany.tags)
    const companyPhoto = useSelector(state=>state.createCompany.photo)
    const userId = useSelector(state=>state.user.userId)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [sum, setSum] = useState(0)
    const [vidUrl, setUrl] = useState('')

    function updateName(event) {
        setName(event.target.value);
        if (typeof onChange === "function") {
            onChange(event.target.value);
        }
    }

    function updateUrl(event) {
        setUrl(event.target.value);
        if (typeof onChange === "function") {
            onChange(event.target.value);
        }
    }

    function updateDescription(event) {
        setDescription(event.target.value);
        if (typeof onChange === "function") {
            onChange(event.target.value);
        }
    }

    function updateSum(event) {
        setSum(event.target.value);
        if (typeof onChange === "function") {
            onChange(event.target.value);
        }
    }

    return (
        <div>
            <NavBar />
            <div className='container m-5'>
                <div className='form-group mb-2'>
                    <label
                        for='companyNameInput'
                    >Company Name</label>
                    <input
                        type='text'
                        value={name}
                        className='form-control z-depth-1 col-4'
                        id='companyNameInput'
                        placeholder='Company Name'
                        onChange={updateName}
                    ></input>
                </div>
                <div class='form-group shadow-textarea mb-2'>
                    <label
                        for='descriptionArea'
                    >Description</label>
                    <textarea
                        className='form-control z-depth-1'
                        value={description}
                        id='descriptionArea'
                        rows='3'
                        placeholder='Your company description here...'
                        onChange={updateDescription}
                    ></textarea>
                </div>
                <div class='input-group mb-2'>
                    <label
                        className='col-1'
                        for='companyNameInput'
                    >Target Sum</label>
                    <div className='row'>
                        <input pattern='\d+(\.\d{2})?'
                            type='number'
                            step='any'
                            value={sum}
                            className='form-control z-depth-1 col-4'
                            aria-label='Dollar amount (with dot and two decimal places)'
                            id='companyNameInput'
                            placeholder='0.00'
                            onChange={updateSum}
                        ></input>
                    </div>
                    <div class="input-group-append">
                        <span class="input-group-text">$</span>
                    </div>
                </div>
                <div class='input-group mb-2'>
                    <label
                        className='col-1'
                        for='companyNameInput'
                    >Expiration Date</label>
                </div>
                <ExpirationDate className='mb-3' />
                <div class="input-group mt-2">
                    <label
                        className='col-1'
                    >Category</label>
                    <CategoryPicker />
                </div>
                <TagsInput
                    className='mt-3 mb-3'
                />
                <div class='form-group mb-2'>
                    <label
                        for='companyNameInput'
                    >Video URL</label>
                    <input
                        type='text'
                        value={vidUrl}
                        className='form-control z-depth-1 col-4'
                        id='companyNameInput'
                        placeholder='https://....'
                        onChange={updateUrl}
                    ></input>
                </div>
                <ImageDnD/>
                <button
                    className='btn btn-primary'
                    onClick={() => dispatch(createCompany(
                        userId, name, description,
                        sum, date, category,
                        vidUrl, tags, companyPhoto))}
                >
                    Next
                </button>
            </div>

        </div >
    )
}
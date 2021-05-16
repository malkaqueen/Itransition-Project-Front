import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../redux/actions'

export default function CategoryPicker() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.createCompany.categories)
    const categoryId = useSelector(state => state.createCompany.categoryId)

    return (
        <div>
            <select
                className="custom-select"
                value={categoryId}
                onChange={(e) => {
                    dispatch(setCategory(e.target.value))
                }}
            >
                <option selected>Choose...</option>
                {categories.length && categories.map(category => <option value={category.id}>{category.categoryName}</option>)}
            </select>
        </div>
    )
}
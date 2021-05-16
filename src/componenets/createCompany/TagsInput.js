import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputTags } from 'react-bootstrap-tagsinput'
import 'react-bootstrap-tagsinput/dist/index.css'
import { addTag } from '../../redux/actions'

export default function TagsInput() {
  const dispatch = useDispatch()
  const tags = useSelector(state => state.createCompany.tags)

  return (
    <div>
      <div className='input-group'>
        <InputTags
          values={tags} onTags={(value) => {
            dispatch(addTag(Array.from(new Set(value.values))))
          }
          } />
        <button
          className='btn btn-outline-secondary'
          type='button'
          data-testid='button-clearAll'
          onClick={() => {
            dispatch(addTag([]))
          }}
        >
          Delete all
        </button>
      </div>
      <hr />
    </div>
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTagTruncator } from 'react-use-tag-truncator'
import { fetchTags } from '../../redux/actions'

export default function TagsCloud() {
    const dispatch = useDispatch()
    const tags = useSelector(state => state.main.tags)
    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    const [
        containerRef,
        isExtended,
        toggleExtend,
        hiddenCount,
    ] = useTagTruncator()

    return (
        <div
            className='container m-5 p-2 bg-gradient-info text-dark'
        >
            <ul
                ref={containerRef}
                style={{
                    maxHeight: isExtended ? 'none' : '80px',
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {tags.map(tag => (
                    <p
                        key={tag.id}
                        className='m-2'
                    ># {tag.tag}</p>
                ))}
                <button
                    className='btn btn-outline-info'
                    onClick={toggleExtend}>
                    {isExtended ? 'Hide' : `+ ${hiddenCount} more...`}
                </button>
            </ul>
        </div>
    )
}
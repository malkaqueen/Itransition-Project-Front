import React from 'react'
import { useTagTruncator } from 'react-use-tag-truncator'

export default function Tags({ tags }) {

    const [
        containerRef,
        isExtended,
        toggleExtend,
        hiddenCount,
    ] = useTagTruncator()

    return (
        <div className='row text-dark'>
            <ul
                ref={containerRef}
                style={{
                    maxHeight: isExtended ? 'none' : '40px',
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {tags.map(tag => (
                    <p
                        key={tag.id}
                        className='ms-2'
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
import React from "react";

export default () => {
    const tags = ["tag1", "tag2", "tag3"]
    return tags.map(tag=><p className='btn text-right'>{`#${tag}`}</p>)
}
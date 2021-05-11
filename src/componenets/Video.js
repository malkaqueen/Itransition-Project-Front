import React from "react";
import ReactPlayer from "react-player";

export default () => {
    return (
        <div className='row mb-5 ps-5 ms-3'>
            <ReactPlayer url='https://www.youtube.com/watch?v=kwPqZyS2ttA&t=2007s' controls={true}/>
        </div>
    )
}
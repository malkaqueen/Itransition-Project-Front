import React from "react";
import ReactPlayer from "react-player";

export default function Video ({video}) {
    return (
        <div className='row mb-5 ps-5 ms-3'>
            <ReactPlayer url={video} controls={true}/>
        </div>
    )
}
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux'
import { addUserPhoto } from '../../redux/actions'

export default function RegisterImage () {
    const dispatch = useDispatch()
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone(
        {
            accept: 'image/*',
            id: 'image',
            onDrop: (acceptedFiles) => {
                setFiles(
                    acceptedFiles.map((file) => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    }))
                )

                const formData = new FormData();
                formData.append('companyPhoto', acceptedFiles[0], acceptedFiles[0].name)

                dispatch(addUserPhoto(formData))
            }
        }
    )

    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{ width: '200px' }} alt='preview' />
            </div>
        </div>
    ))

    return (
        <div>
            <div {...getRootProps({ className: 'dropzone', id: 'my-awesome-dropzone' })}>
                <input {...getInputProps()} />
                <button className='btn btn-outline-primary'>Choose photo or drop here</button>
            </div>
            <div>
                {images}
            </div>
        </div>
    )
}
import React from 'react'

const Error = ({ message }) => {
    return (
        <span className='text-red-800 text-sm'>
            {message}
        </span>
    )
}

export default Error

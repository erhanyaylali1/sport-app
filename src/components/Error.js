import React from 'react'
import { useSelector } from 'react-redux'
import { getError } from '../features/generalSlice'

const Error = () => {
    const error = useSelector(getError)
    return (
        <div style={{ textAlign: 'center' }}>
            <small className="error" style={{ color: '#9a0000' }}>
                {error}
            </small>
        </div>
    )
}

export default Error

import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

export default function Login() {
    const {setToken} = useContext(AppContext)
    return (
        <>
            <h1 className='title'>Login to your account</h1>
        </>
    )
}

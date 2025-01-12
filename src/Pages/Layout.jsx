import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

export default function Layout() {
    const { user } = useContext(AppContext)
    return (
        <>
            <header>
                <nav>
                    <Link to="/" className='nav-link'>Home</Link>
                    {user  ?
                        (<div className='space-x-4'>
                            <p className=' text-slate-400 text-xs'>Welcome back {user.name}</p>
                        </div>)
                        : (
                            <div className='space-x-4'>
                                <Link to="/register" className='nav-link'>Register</Link>
                                <Link to="/login" className='nav-link'>Login</Link>
                            </div>
                        )}
                </nav >

            </header >
            <main>
                <Outlet />
            </main>
        </>
    )
}

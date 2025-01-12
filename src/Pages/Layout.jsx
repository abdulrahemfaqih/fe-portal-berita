import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { Toaster } from 'react-hot-toast'

export default function Layout() {
    const { user, loading } = useContext(AppContext)

    return (
        <>
            <Toaster />
            <header>
                <nav className="flex justify-between items-center p-4">
                    <Link to="/" className='nav-link'>Home</Link>

                    <div>
                        {loading ? (
                            // Skeleton loader while checking auth status
                            <div className="animate-pulse flex space-x-4">
                                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                            </div>
                        ) : user ? (
                            <div className='flex items-center space-x-4'>
                                <p className='text-slate-600'>
                                    Welcome back, <span className="font-medium">{user.name}</span>
                                </p>
                                {/* Add logout button if needed */}
                            </div>
                        ) : (
                            <div className='space-x-4'>
                                <Link to="/register" className='nav-link'>Register</Link>
                                <Link to="/login" className='nav-link'>Login</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-8">
                {loading ? (
                    // Main content skeleton loader
                    <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>
        </>
    )
}
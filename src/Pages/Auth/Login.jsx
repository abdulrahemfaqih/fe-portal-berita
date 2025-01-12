import { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { setToken } = useContext(AppContext)


    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleLogin(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch("/api/login", {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            const data = await res.json()

            if (res.ok) {
                toast.success("Login berhasil!")
                localStorage.setItem("token", data.access_token)
                setToken(data.access_token)
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            } else {
                setErrors(data.errors);
            }
        } catch (error) {
            console.log('Login Error:', error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <>
            <h1 className='title'>Login to your account</h1>
            <form onSubmit={handleLogin} className='w-1/2 mx-auto space-y-4 mb-4'>
                <div>
                    <input
                        type="text"
                        placeholder='email'
                        value={formData.email}
                        name='email'
                        onChange={handleChange}
                        disabled={loading} />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder='Password'
                        value={formData.password}
                        name='password'
                        onChange={handleChange}
                        disabled={loading} />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>

                <button
                    className='primary-btn'
                >
                    {loading ? 'Logging...' : "Login"}
                </button>
            </form>
        </>
    )
}

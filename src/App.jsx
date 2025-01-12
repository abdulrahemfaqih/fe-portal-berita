import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Register from "./Pages/Auth/Register"
import Login from "./Pages/Auth/Login"
import { useContext } from "react"
import { AppContext } from "./Context/AppContext"

export default function App() {
    const { user } = useContext(AppContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
                    <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

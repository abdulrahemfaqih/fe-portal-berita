import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getuser() {
            try {
                const res = await fetch("/api/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const data = await res.json()
                console.log(data)
                if (!res.ok) {
                    throw new Error(data.message || 'Failed to fetch user data');
                }
                setUser(data);
            } catch {
                setUser(null);

            } finally {
                setLoading(false)
            }
        }

        if (token) {
            getuser()
        } else {
            setUser(null)
            setLoading(false);
        }
    }, [token])


    return (
        <AppContext.Provider value={{ token, setToken, user, loading }}>
            {children}
        </AppContext.Provider>
    )
}

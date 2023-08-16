import axios from 'axios'
import { useEffect, useState } from 'react'

const SERVER_URI = import.meta.env.VITE_SERVER_URI

const useAuth = () => {
    const [user, setUser] = useState(null)

    const logOut = () => {
        if (!user) return
        axios
            .get(SERVER_URI + '/auth/logout', { withCredentials: true })
            .then(() => setUser(null))
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        const getCredentials = async () => {
            const res = await axios.get(SERVER_URI + '/auth/login/success', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            })

            if (res.status === 200) return res.data.user
            else throw new Error('Unauthorized 401')
        }

        getCredentials()
            .then((user) => setUser(user))
            .catch((err) => setUser(null))
    }, [])
    return { user, logOut }
}

export default useAuth

import axios from 'axios'

const SERVER_URI = import.meta.env.VITE_SERVER_URI

export const authLoader = () => {
    return axios

        .get(SERVER_URI + '/auth/login/success', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
        .then((res) => {
            const { data: user } = res
            return user || null
        })
        .catch((err) => {
            console.error(err)
            return null
        })
}

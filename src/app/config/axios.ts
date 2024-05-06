import { appLocalStorage } from '@/shared'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_DOMAIN,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        'X-Timezone': 'Asia/Batumi'
    },
    responseType: 'json',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT)
})

http.interceptors.request.use((config) => {
    const jwt = appLocalStorage.get('jwt')

    if (jwt && jwt.access_token) {
        config.headers.Authorization = `Bearer ${jwt.access_token}`
    }

    return config
}, (error) => {
    // ??? что здесь можно/нужно делать
    return Promise.reject(error);
})

http.interceptors.response.use((response) => {
    // ??? что здесь можно/нужно делать
    return response
}, (error: AxiosError) => {

    if (error.code === 'ERR_NETWORK') {
        toast.error('API Error :(')
    }

    if (error.response?.status === 403) {
        toast.error('Вам запрещено обращаться по этому URL')
    }

    // ???
    return Promise.reject(error);
})

import axios, { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'
import { appLocalStorage } from '@/shared'

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
    const accessToken = appLocalStorage.get('access_token')

    if (accessToken) {
        config.headers.Authorization = accessToken
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

    if (error.response?.statusText === 'Unauthorized') {
        toast.error('Authorization error')
    }

    // ???
    return Promise.reject(error);
})

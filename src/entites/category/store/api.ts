import { isAxiosError } from 'axios'
import { http } from "@/app/config/axios";
import type {
    IFetchAllSuccess,
    IFetchSingleSuccess
} from "./types"

const FETCH_ALL = 'category'

export async function fetchAll() {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await http.get<IFetchAllSuccess>(FETCH_ALL)
        return { categories: response.data }
    } catch (err: unknown) {
        throw err
    }
}

export async function fetchBySlug(slug: string) {
    let url = FETCH_ALL

    if (slug) {
        url += `/${slug}`
    }
    
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await http.get<IFetchSingleSuccess>(url)
        return { categories: response.data }
    } catch (err: unknown) {
        if (isAxiosError(err) && err.response) {
            return { error: true }
        }
        throw err
    }
}

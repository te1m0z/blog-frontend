import { isAxiosError } from 'axios'
import { http } from "@/app/config/axios";
import type {
    IFetchAllSuccess,
    IFetchSingleSuccess,
    ICreateCategoryParams,
    ICreateCategorySuccess
} from "./types"

const FETCH_ALL = 'category/all'
const FETCH_TOP = 'category/top'
const FETCH_BY_SLUG = 'category'

export async function fetchAll() {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await http.get<IFetchAllSuccess>(FETCH_ALL)
        return { categories: response.data }
    } catch (err: unknown) {
        throw err
    }
}

export async function fetchTop() {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await http.get<IFetchAllSuccess>(FETCH_TOP)
        return { categories: response.data }
    } catch (err: unknown) {
        throw err
    }
}

export async function fetchBySlug(slug: string) {
    let url = FETCH_BY_SLUG

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

export async function create(params: ICreateCategoryParams) {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await http.post<ICreateCategorySuccess>(FETCH_BY_SLUG, params)
        return { category: response.data }
    } catch (err: unknown) {
        if (isAxiosError(err) && err.response) {
            return err.response.data
        }
        throw err
    }
}

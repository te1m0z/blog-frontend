import { isAxiosError } from 'axios'
import { http } from "@/app/config/axios";
import type {
    ICreateNoteParams,
    ICreateNoteSuccess,
    ICreateNoteError,
    IFetchAllNotesSuccess,
    IFetchAllNotesParams
} from "./types"

// const USER_DATA = 'user'
const FETCH_ALL_NOTES = 'note'
const NOTE_CREATE = 'note'
// const FETCH_CSRF = 'csrf'

export async function fetchNotes(params: IFetchAllNotesParams) {
    const url = `${FETCH_ALL_NOTES}?page=${params.page}`
    
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await http.get<IFetchAllNotesSuccess>(url)
        return { response: { notes: response.data.data, meta: response.data.meta } }
    } catch (err: unknown) {
        throw err
    }
}

export async function createNote(params: ICreateNoteParams) {
    try {
        const response = await http.post<ICreateNoteSuccess>(NOTE_CREATE, params)
        return { response: response.data.data }
    } catch (err: unknown) {
        if (isAxiosError(err) && err.response) {
            const errData = err.response.data as ICreateNoteError
            return { error: errData.errors }
        }
        throw err
    }
}

import type { INote } from "../types"
import { IBaseServerError } from "@/shared/types/Http"

export interface ICreateNoteParams {
    title: string
    content: string
    categoryId: number
}

export interface ICreateNoteSuccess {
    data: INote
}

export interface ICreateNoteError extends IBaseServerError {
    errors: {
        title: string
        content: string
        categoryId: string
    }
}

/* Fetch all notes */

export interface IFetchAllNotesParams {
    page: number
}

export interface IFetchAllNotesSuccess {
    data: INote[]
    meta: {
        page: number
        total: number
    }
}

/* Fetch single note */

export interface IFetchNoteParams {
    id: number
}

export interface IFetchNoteSuccess {
    data: INote
}

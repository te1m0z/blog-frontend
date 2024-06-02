import type { INote } from "../types"
import { IBaseServerError } from "@/shared/types/Http"

export interface ICreateNoteParams {
    slug: string
    title: string
    content: string
    categoryId?: number
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
    category: string
}

export interface IFetchAllNotesSuccess {
    data: INote[]
    meta: {
        page: number
        totalPages: number
        totalItems: number
        pageSize: number
    }
}

/* Fetch single note */

export interface IFetchNoteParams {
    slug: string
}

export interface IUpdateNoteParams {
    slug: string
    title: string
    content: string
}

export interface IFetchNoteSuccess {
    data: INote
}

import type { ICategory } from "../types"

/* Fetch all notes */

export type IFetchAllSuccess = ICategory[]

/* Fetch single note */

export interface IFetchSingleParams {
    slug: string
}

export type IFetchSingleSuccess = ICategory[]

export interface ICreateCategoryParams {
    name: string
    slug: string
    parentId: number | null 
}

export type ICreateCategorySuccess = ICategory

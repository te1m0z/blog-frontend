import { makeObservable, observable } from 'mobx'
import * as api from './api'
import type { ICategory } from '../types'
import type { ICreateCategoryParams } from './types'

type TCategoryPrivateFields = '_allCategories'

export class Category {

    private _allCategories: ICategory[] = []

    get allCategories() {
        return this._allCategories
    }

    constructor() {
        makeObservable<Category, TCategoryPrivateFields>(this, {
            _allCategories: observable,
        })
    }

    async fetchAll() {
        const { categories } = await api.fetchAll()

        this._allCategories = categories

        return categories
    }

    async fetchTop() {
        const { categories } = await api.fetchTop()

        this._allCategories = categories

        return categories
    }

    async fetchBySlug(payload: string) {
        const response = await api.fetchBySlug(payload)

        return response
    }

    async create(params: ICreateCategoryParams) {

        return await api.create(params)
    }
}
  
import * as api from './api'
import { ICategory } from '../types'
import { makeObservable, observable } from 'mobx'

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

    async fetchBySlug(payload: string) {
        const response = await api.fetchBySlug(payload)

        return response
    }
}
  
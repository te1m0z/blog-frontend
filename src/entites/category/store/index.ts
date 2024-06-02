import * as api from './api'

export class Category {
    async fetchAll() {
        const { categories } = await api.fetchAll()

        return categories
    }

    async fetchBySlug(payload: string) {
        const response = await api.fetchBySlug(payload)

        return response
    }
}
  
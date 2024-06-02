export interface ICategory {
    type: 'category'
    id: number
    attributes: {
        name: string
        slug: string
    },
    relationships?: {
        category: {
            data: {
                type: 'category',
                id: number
            }
        }
    }
}

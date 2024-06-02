export interface INote {
    id: number
    attributes: {
        title: string
        content: string
        slug: string
        published: boolean
        createdAt: string
        updatedAt: string
    }
}

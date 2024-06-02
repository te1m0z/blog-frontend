import { type ReactNode, createContext, memo } from 'react'
import { injectStores } from '@mobx-devtools/tools'
import { Category } from '@/entites/category/store'

const categoryStore = new Category()

if (import.meta.env.DEV) {
    injectStores({ categoryStore })
}

export const CategoryContext = createContext<Category>(categoryStore)

interface CategoryProviderProps {
    children: ReactNode
}

export const CategoryProvider = memo(({ children }: CategoryProviderProps) => {
    return (
        <CategoryContext.Provider value={categoryStore}>
            {children}
        </CategoryContext.Provider>
    )
})

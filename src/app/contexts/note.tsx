import { type ReactNode, createContext, memo } from 'react'
import { injectStores } from '@mobx-devtools/tools'
import { Note } from '@/entites/note/store'

const noteStore = new Note()

if (import.meta.env.DEV) {
    injectStores({ noteStore })
}

export const NoteContext = createContext<Note>(noteStore)

interface NoteProviderProps {
    children: ReactNode
}

export const NotesProvider = memo(({ children }: NoteProviderProps) => {
    return (
        <NoteContext.Provider value={noteStore}>
            {children}
        </NoteContext.Provider>
    )
})

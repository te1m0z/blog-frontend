import { type ReactNode, createContext, memo } from 'react'
import { User } from '@/entites/User/store'

const userStore = new User()

export const UserContext = createContext<User>(userStore)

interface UserProviderProps {
    children: ReactNode
}

export const UserProvider = memo(({ children }: UserProviderProps) => {
    return (
        <UserContext.Provider value={userStore}>
            {children}
        </UserContext.Provider>
    )
})

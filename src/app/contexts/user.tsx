import { type ReactNode, createContext } from 'react'
import { User } from '@/entites/User/store'

const userStore = new User()

export const UserContext = createContext<User>(userStore)

interface UserProviderProps {
    children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => (
    <UserContext.Provider value={userStore}>
        {children}
    </UserContext.Provider>
)
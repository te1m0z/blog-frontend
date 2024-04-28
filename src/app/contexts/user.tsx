import { type ReactNode, createContext, memo, useEffect } from 'react'
import { injectStores } from '@mobx-devtools/tools'
import { User } from '@/entites/User/store'

const userStore = new User()

injectStores({
    userStore
})

export const UserContext = createContext<User>(userStore)

interface UserProviderProps {
    children: ReactNode
}

export const UserProvider = memo(({ children }: UserProviderProps) => {

    useEffect(() => {
        if (userStore.accessToken) {
            userStore.fetchUserData()
        }
    }, [])

    return (
        <UserContext.Provider value={userStore}>
            {children}
        </UserContext.Provider>
    )
})

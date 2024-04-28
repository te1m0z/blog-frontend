import { type TAppLocalStorage } from '../types/Storage'

type StorageType = 'session' | 'local'

const getStorage = (type: StorageType): Storage => {
  const storage = type === 'local' ? window.localStorage : window.sessionStorage

  if (!storage) {
    throw 'Cannot find local storage or session storage'
  }

  return storage
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createStorage = <T extends Record<string, any>>(type: StorageType = 'local') => {
  // Here we will store the added keys.
  let keys: (keyof T)[] = []

  const get = <K extends keyof T>(key: K): T[K] | null => {
    const value = getStorage(type).getItem(key.toString())

    if (value === null) {
      return null
    }

    return typeof value === 'string' ? value as T[K] : JSON.parse(value) as T[K]
  }

  const getAll = (): Record<keyof T, T[keyof T] | null> => {
    return keys.reduce<T>((acc, key) => {
      const value = get(key)

      if (value === null) {
        return acc
      }

      return {
        ...acc,
        [key]: value
      }
    }, {} as T)
  }

  const getKeys = (): (keyof T)[] => {
    return keys
  }

  const remove = <K extends keyof T>(key: K): void => {
    getStorage(type).removeItem(key.toString())
    keys = keys.filter((currKey) => currKey !== key)
  }

  const set = <K extends keyof T>(key: K, value: T[K]): void => {
    getStorage(type).setItem(key as string, JSON.stringify(value))
    !keys.includes(key) && keys.push(key)
  }

  const clear = (): void => {
    keys.forEach(remove)
  }

  const patch = (obj: Partial<T>): void => {
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== undefined) {
        set(key, value)
      }
    })
  }

  return {
    get,
    getAll,
    getKeys,
    remove,
    set,
    clear,
    patch
  }
}

const appLocalStorage = createStorage<TAppLocalStorage>('local')
const appSessionStorage = createStorage<TAppLocalStorage>('session')

export { appLocalStorage, appSessionStorage }

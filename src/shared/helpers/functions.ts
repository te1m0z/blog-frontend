export function isObject(value: unknown): value is Record<string, string> {
    const isIsObjectType = typeof value === 'object'
    const isNotArray = !Array.isArray(value)
    const isNotNull = value !== null

    return isIsObjectType && isNotArray && isNotNull
}

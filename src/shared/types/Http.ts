export interface IBaseServerSuccess<T> {
    status: true
    data: T
}

export interface IBaseServerError {
    status: false
    errors: Record<string, string>
}

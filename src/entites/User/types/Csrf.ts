import { UUID } from "crypto"

export interface ICsrfToken {
    token: UUID
    expires: Date
}
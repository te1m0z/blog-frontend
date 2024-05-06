import { makeObservable, action } from "mobx"
import type { ICreateNoteParams, IFetchAllNotesParams } from './types'
import * as api from './api'

export class Note {

    constructor() {
        makeObservable(this, {
            createNote: action,
        })
    }

    async createNote(payload: ICreateNoteParams) {
        const { response } = await api.createNote(payload)

        return !!response
    }

    async fetchNotes(payload: IFetchAllNotesParams) {
        const { response } = await api.fetchNotes(payload)

        return response
    }
}
  
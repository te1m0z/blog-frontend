import { makeObservable, action } from "mobx"
import type { ICreateNoteParams, IFetchAllNotesParams, IFetchNoteParams } from './types'
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

    async fetchNote(payload: IFetchNoteParams) {
        const response = await api.fetchNote(payload)

        return response
    }
}
  
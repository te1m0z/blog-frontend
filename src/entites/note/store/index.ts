// import { makeObservable, action } from "mobx"
import type {
    ICreateNoteParams,
    IFetchAllNotesParams,
    IFetchNoteParams,
    IUpdateNoteParams,
} from "./types";
import * as api from "./api";

export class Note {
    async createNote(payload: ICreateNoteParams) {
        const { response } = await api.createNote(payload);

        return !!response;
    }

    async fetchNotes(payload: IFetchAllNotesParams) {
        const { response } = await api.fetchNotes(payload);

        return response;
    }

    async fetchNote(payload: IFetchNoteParams) {
        const response = await api.fetchNote(payload);

        return response;
    }

    async updateNote(payload: IUpdateNoteParams) {
        const response = await api.updateNote(payload);

        return response;
    }
}

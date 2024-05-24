import { NoteContext } from "@/app/contexts/note";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "@/pages/NotFound";
import { INote } from "@/shared";

export function NotePage() {
    const params = useParams();
    const noteStore = useContext(NoteContext);
    const [note, setNote] = useState<INote | null>(null);
    const [isNotesLoading, setIsNotesLoading] = useState<boolean>(true);

    useEffect(() => {
        const id = Number(params.id);

        if (Number.isNaN(id)) {
            setIsNotesLoading(false);
            return;
        }

        async function fetchNote() {
            setIsNotesLoading(true);

            const { response } = await noteStore.fetchNote({ id });

            if (response?.note) {
                setNote(response.note);
            } else {
                setNote(null);
            }
            setIsNotesLoading(false);
        }

        fetchNote();
    }, [noteStore, params.id]);

    if (!isNotesLoading && !note) {
        return <NotFoundPage />;
    }

    return <div className="">note page {note?.title}</div>;
}

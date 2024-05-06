import { useContext, useEffect, useState } from "react";
import BlogCard from "@/entites/Blog/ui/BlogCard";
import { NoteContext } from "@/app/contexts/note";
import { useSearchParams } from "react-router-dom";
import Pagination from "@/shared/ui/Pagination";
import { INote } from "@/shared";

import * as S from "./styles";

export function Component() {
    const [searchParams, setSearchParams] = useSearchParams();
    const noteStore = useContext(NoteContext);
    const [notes, setNotes] = useState<INote[]>([]);
    const [notesCurrentPage, setNotesCurrentPage] = useState<number>(() => {
        return Number(searchParams.get('page')) || 1
    });
    const [notesTotalPages, setNotesTotalPages] = useState<number>(-1);
    const [isNotesLoading, setIsNotesLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsNotesLoading(true);

        async function fetchNotes() {
            const { notes, meta } = await noteStore.fetchNotes({
                page: notesCurrentPage,
            });
            setNotes([...notes]);
            setNotesTotalPages(meta.total);
            setIsNotesLoading(false);
        }

        fetchNotes();
    }, [noteStore, notesCurrentPage]);

    function onPageChangeHandler(page: number) {
        setNotesCurrentPage(page)
        setSearchParams({ page: String(page) })
    }

    return (
        <S.NotesContainer>
            <div className="">
                {isNotesLoading ? (
                    <div className="">loading</div>
                ) : (
                    <div className="">
                        {notes.length > 0
                            ? (
                                <>
                                    {notes.map((note) => (
                                        <BlogCard
                                            key={note.id}
                                            title={note.title}
                                            content={note.content}
                                        />
                                    ))}
                                    <div className="">
                                        <Pagination
                                            currentPage={notesCurrentPage}
                                            onPageChange={onPageChangeHandler}
                                            totalCount={notesTotalPages}
                                            pageSize={3}
                                        />
                                    </div>
                                </>
                            )
                            : "EMPTY"}
                    </div>
                )}
            </div>
        </S.NotesContainer>
    );
}

Component.displayName = "NotesPage";

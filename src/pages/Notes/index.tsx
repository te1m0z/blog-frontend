import { useContext, useEffect, useState } from "react";
import { Skeleton, Pagination, Grid, Row, Card, Col, List } from "antd";
import BlogCard from "@/entites/Blog/ui/BlogCard";
import { NoteContext } from "@/app/contexts/note";
import { useSearchParams } from "react-router-dom";
// import Pagination from "@/shared/ui/Pagination";
import { INote } from "@/shared";

import * as S from "./styles";
import Meta from "antd/es/card/Meta";

export function Component() {
    const [searchParams, setSearchParams] = useSearchParams();
    const noteStore = useContext(NoteContext);
    const [notes, setNotes] = useState<INote[]>([]);
    const [notesCurrentPage, setNotesCurrentPage] = useState<number>(() => {
        return Number(searchParams.get("page")) || 1;
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
        setNotesCurrentPage(page);
        setSearchParams({ page: String(page) });
    }

    return (
        <Row gutter={[16, 16]}>
            {isNotesLoading ? (
                Array.from({ length: 9 }, (_, index) => (
                    <Col span={8} key={index}>
                        <Card>
                            <Skeleton paragraph={{ rows: 2 }} active round />
                        </Card>
                    </Col>
                ))
            ) : (
                <>
                    {notes.map((note) => (
                        <Col span={8} key={note.id}>
                            <Card hoverable>
                                <Meta
                                    title={note.title}
                                    description={
                                        note.content.length > 100
                                            ? `${note.content.substring(
                                                0,
                                                100
                                            )}...`
                                            : note.content
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                    <Pagination
                        current={notesCurrentPage}
                        onChange={onPageChangeHandler}
                        total={notesTotalPages}
                        pageSize={9}
                    />
                </>
            )}
        </Row>
    );

    return (
        <S.NotesContainer>
            <div className="">
                <Grid />
                {isNotesLoading ? (
                    <>
                        {skeletonNotes.map((note) => (
                            <BlogCard
                                key={note.id}
                                title={note.title}
                                content={note.content}
                            />
                        ))}
                    </>
                ) : (
                    <div className="">
                        {notes.length > 0 ? (
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
                                        current={notesCurrentPage}
                                        onChange={onPageChangeHandler}
                                        total={notesTotalPages}
                                        pageSize={3}
                                    />
                                </div>
                            </>
                        ) : (
                            "EMPTY"
                        )}
                    </div>
                )}
            </div>
        </S.NotesContainer>
    );
}

Component.displayName = "NotesPage";

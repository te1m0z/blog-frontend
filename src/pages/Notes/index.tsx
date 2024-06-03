import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NoteContext } from "@/app/contexts/note";
import { CategoryContext } from "@/app/contexts/category";
import { useSearchParams } from "react-router-dom";
import { INote } from "@/entites/note/types";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CustomPagination } from "@/shared/ui/Pagination";
import Button from "react-bootstrap/esm/Button";
import { ICategory } from "@/entites/category/types";

export function NotesPage() {
    const noteStore = useContext(NoteContext);
    const categoryStore = useContext(CategoryContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const [notes, setNotes] = useState<INote[]>([]);
    const [notesCurrentPage, setNotesCurrentPage] = useState<number>(() => {
        return Number(searchParams.get("page")) || 1;
    });
    const [notesTotalPages, setNotesTotalPages] = useState<number>(-1);
    const [isNotesLoaded, setIsNotesLoaded] = useState(false);

    const category = searchParams.get("category") || "";

    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        async function fetchNotes() {
            const { notes, meta } = await noteStore.fetchNotes({
                page: notesCurrentPage,
                category,
            });

            setNotes([...notes]);
            setNotesTotalPages(meta.totalPages);
            setIsNotesLoaded(true)
        }

        async function fetchCategories() {
            const response = await categoryStore.fetchBySlug(category);

            if (response.categories) {
                setCategories(response.categories);
            }
        }

        fetchCategories();
        fetchNotes();
    }, [category, categoryStore, noteStore, notesCurrentPage]);

    function onPageChangeHandler(page: number) {
        setNotesCurrentPage(page);

        const params: Record<string, string> = {};

        if (category) {
            params.category = category;
        }

        if (page) {
            params.page = String(page);
        }

        setSearchParams(params);
    }

    // function truncateText(text: string, maxLength: number): string {
    //     if (text.length <= maxLength) {
    //         return text;
    //     }

    //     return text.substring(0, maxLength) + "...";
    // }

    return (
        <div>
            <Container>
                <Row className="mb-4">
                    {categories.map(({ id, attributes }) => (
                        <Col key={id} xs="auto">
                            <NavLink
                                to={`/notes?category=${attributes.slug}`}
                                onClick={() => setNotesCurrentPage(1)}
                            >
                                <Button>{attributes.name}</Button>
                            </NavLink>
                        </Col>
                    ))}
                </Row>
            </Container>
            {notes.length > 0 && (
                <Container>
                    <Row>
                        {notes.map((note) => (
                            <Col
                                sm={12}
                                md={6}
                                lg={4}
                                className="mb-4"
                                key={note.id}
                            >
                                <Card key={note.id} className="h-100">
                                    <Card.Body>
                                        <Card.Link
                                            as={NavLink}
                                            to={`/notes/${note.attributes.slug}`}
                                        >
                                            <Card.Title>
                                                {note.attributes.title}
                                            </Card.Title>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <CustomPagination
                        currentPage={notesCurrentPage}
                        totalCount={notesTotalPages}
                        pageSize={9}
                        onPageChange={onPageChangeHandler}
                    />
                </Container>
            )}
            {isNotesLoaded && !notes.length && (
                <div className="">No notes found =(</div>
            )}
        </div>
    );
}

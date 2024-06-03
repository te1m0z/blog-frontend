import { useContext, useEffect, useState } from "react";
import { NoteContext } from "@/app/contexts/note";
import { UserContext } from "@/app/contexts/user";
import { useParams } from "react-router-dom";
import NotFoundPage from "@/pages/NotFound";
import { INote } from "@/entites/note/types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { observer } from "mobx-react-lite";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

function Component() {
    const noteStore = useContext(NoteContext);
    const userStore = useContext(UserContext);

    const params = useParams();

    const [note, setNote] = useState<INote | null>(null);
    const [isNotesLoading, setIsNotesLoading] = useState<boolean>(true);

    const [isEditMode, setIsEditMode] = useState(false);

    const slug = params.slug;

    const [noteEdited, setNoteEdited] = useState({
        title: note?.attributes.title || "",
        content: note?.attributes.content || "",
    });

    useEffect(() => {
        async function fetchNote() {
            setIsNotesLoading(true);

            if (!slug) {
                setIsNotesLoading(false);
                return;
            }

            const { response } = await noteStore.fetchNote({ slug });

            if (response?.note) {
                setNote(response.note);
                setNoteEdited(response.note.attributes);
            } else {
                setNote(null);
            }

            setIsNotesLoading(false);
        }

        fetchNote();
    }, [noteStore, slug]);

    if (!isNotesLoading && !note) {
        return <NotFoundPage />;
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "code", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
        ],
    };

    async function updateNote() {
        const { response } = await noteStore.updateNote({
            slug: slug!,
            title: noteEdited.title,
            content: noteEdited.content,
        });

        if (response) {
            setNote(response);
            setNoteEdited(response.attributes);
            setIsEditMode(false);
        }
    }

    return (
        <Container className="mt-5">
            {isNotesLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" />
                </div>
            ) : (
                note && (
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            {userStore.isAuth && (
                                <div className="mb-3">
                                    <Button
                                        className="me-3"
                                        onClick={() =>
                                            setIsEditMode((prev) => !prev)
                                        }
                                    >
                                        {isEditMode ? "cancel" : "edit"}
                                    </Button>
                                    {isEditMode && (
                                        <Button onClick={updateNote}>
                                            update
                                        </Button>
                                    )}
                                </div>
                            )}
                            <Card>
                                <Card.Body>
                                    {isEditMode ? (
                                        <Form.Control
                                            type="text"
                                            value={noteEdited.title}
                                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                setNoteEdited((prev) => ({
                                                    ...prev,
                                                    title: e.target.value,
                                                }))
                                            }
                                        />
                                    ) : (
                                        <Card.Title>
                                            {note.attributes.title}
                                        </Card.Title>
                                    )}
                                    <div className="d-flex justify-content-between">
                                        <Card.Text>
                                            <small className="text-muted">
                                                Опубликовано:{" "}
                                                {formatDate(
                                                    note.attributes.createdAt
                                                )}
                                            </small>
                                        </Card.Text>

                                        <Card.Text className="d-none d-md-block">
                                            <small className="text-muted">
                                                Изменено:{" "}
                                                {formatDate(
                                                    note.attributes.updatedAt
                                                )}
                                            </small>
                                        </Card.Text>
                                    </div>
                                    {isEditMode ? (
                                        <ReactQuill
                                            theme="snow"
                                            value={noteEdited.content}
                                            onChange={(value) =>
                                                setNoteEdited((prev) => ({
                                                    ...prev,
                                                    content: value,
                                                }))
                                            }
                                            modules={modules}
                                        />
                                    ) : (
                                        <Card.Text
                                            dangerouslySetInnerHTML={{
                                                __html: note.attributes.content,
                                            }}
                                        />
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )
            )}
        </Container>
    );
}

export const NotePage = observer(Component);

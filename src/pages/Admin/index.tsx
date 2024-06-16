import { useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "@/app/contexts/note";
import { useForm, FieldValues, Controller } from "react-hook-form";
import { withAuth } from "@/shared/ui/PrivateRoute";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cn from "classnames";
import { CreateCategoryForm } from "@/features/category/ui/createCategoryForm";

function AdminPage() {
    const notesStore = useContext(NoteContext);

    const navigate = useNavigate();

    const { register, handleSubmit, formState, control } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
    });

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "code", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
        ],
    };

    async function createNoteHandler({ slug, title, content }: FieldValues) {
        const isNoteCreated = await notesStore.createNote({
            slug,
            title,
            content,
        });

        console.log(isNoteCreated);

        if (isNoteCreated) {
            navigate("/notes/" + slug);
        }
    }

    return (
        <div>
            <CreateCategoryForm />
            <Form onSubmit={handleSubmit(createNoteHandler)}>
                <Form.Text>Создать Note</Form.Text>
                <Form.Group className="mb-3" controlId="createNoteSlug">
                    <Form.Label>Slug</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter slug"
                        {...register("slug", { required: true })}
                        className={cn({ "is-invalid": formState.errors.slug })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="createNoteTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        {...register("title", { required: true })}
                        className={cn({ "is-invalid": formState.errors.title })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="createNoteContent">
                    <Form.Label>Content</Form.Label>
                    <Controller
                        name="content"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => (
                            <ReactQuill
                                theme="snow"
                                value={field.value}
                                onChange={field.onChange}
                                ref={field.ref}
                                modules={modules}
                            />
                        )}
                    />
                </Form.Group>

                <Button type="submit">Create</Button>
            </Form>
        </div>
    );
}

const Component = observer(withAuth(AdminPage));

Component.displayName = "AdminPage";

export { Component };

import { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, InputText, Tabs } from "@/shared";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { UserContext } from "@/app/contexts/user";
import { NoteContext } from "@/app/contexts/note";
import * as S from "./styles";
import { useForm, FieldValues } from "react-hook-form";

function AdminPage() {
    const userStore = useContext(UserContext);
    const notesStore = useContext(NoteContext);

    const [note, setNote] = useState({
        title: "",
        content: "",
        categoryId: 1,
    });

    const { register, handleSubmit, formState, watch } = useForm();

    const noteTitleField = register("noteTitle", { required: "required!!" });
    const noteTitleValue = watch("noteTitle", "");

    if (!userStore.isAuth) {
        return <Navigate to={"/"} replace={true} />;
    }

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "code", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
        ],
    };

    function onInputNoteContent(value: string) {
        setNote((state) => ({ ...state, content: value }));
    }

    async function createNoteHandler({ noteTitle }: FieldValues) {
        const isNoteCreated = await notesStore.createNote({
            title: noteTitle,
            content: note.content,
            categoryId: note.categoryId,
        });

        console.log(isNoteCreated)
    }

    const tabItems = [
        { label: 'Notes', value: 'notes' },
        { label: 'Portfolio', value: 'portfolio' }
    ]

    return (
        <S.AdminPageSections>
            <Tabs items={tabItems} />
            <S.AdminPageSectionsItem>
                <div>Create new note</div>
                <form onSubmit={handleSubmit(createNoteHandler)}>
                    <InputText
                        label={"Title"}
                        name={noteTitleField.name}
                        value={noteTitleValue}
                        onChange={noteTitleField.onChange}
                        onBlur={noteTitleField.onBlur}
                        inputRef={noteTitleField.ref}
                        error={!!formState.errors.noteTitle}
                        errorText={
                            formState.errors.noteTitle?.message as string
                        }
                    />
                    <ReactQuill
                        theme="snow"
                        value={note.content}
                        onChange={onInputNoteContent}
                        modules={modules}
                    />
                    <Button type="submit">Create</Button>
                </form>
            </S.AdminPageSectionsItem>
        </S.AdminPageSections>
    );
}

const Component = observer(AdminPage);

Component.displayName = "AdminPage";

export { Component };

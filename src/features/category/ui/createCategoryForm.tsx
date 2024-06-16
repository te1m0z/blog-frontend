import { useContext, useState, useEffect } from "react";
import { useForm, FieldValues, Controller } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cn from "classnames";
import { CategoryContext } from "@/app/contexts/category";
import { ICategory } from "@/entites/category/types";

export function CreateCategoryForm() {
    const categoryStore = useContext(CategoryContext);

    const [categories, setCategories] = useState<ICategory[]>([]);

    const { register, handleSubmit, formState } = useForm();

    useEffect(() => {
        async function fetchCategories() {
            const allCategories = await categoryStore.fetchAll();

            setCategories(allCategories);
        }

        fetchCategories();
    }, [categoryStore]);

    async function createNoteHandler({ name, slug, parentId }: FieldValues) {
        const params = { name, slug }

        if (parentId) {
            params.parentId = parentId
        }

        const isCategoryCreated = await categoryStore.create(params);

        console.log(isCategoryCreated);
    }

    return (
        <Form onSubmit={handleSubmit(createNoteHandler)}>
            <Form.Text>Создать Category</Form.Text>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    {...register("name", { required: true })}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Slug</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter slug"
                    {...register("slug", { required: true })}
                    className={cn({ "is-invalid": formState.errors.slug })}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Род. категория</Form.Label>
                <Form.Select {...register("parentId")}>
                    <option value="">None</option>
                    {categories.map((c) => (
                        <option value={c.id} key={c.id}>
                            {c.attributes.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Button type="submit" className="mt-2">
                Create
            </Button>
        </Form>
    );
}

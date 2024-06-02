import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "@/app/contexts/user";
import { NotesProvider } from "@/app/contexts/note";
import { CategoryProvider } from "@/app/contexts/category";
import { router } from "@/app/router";

import './app/styles/custom.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
    <UserProvider>
        <NotesProvider>
            <CategoryProvider>
                <RouterProvider router={router} />
            </CategoryProvider>
        </NotesProvider>
    </UserProvider>
);

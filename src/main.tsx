import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {} from "mobx-react-lite";
import { AppThemeProvider } from "@/app/contexts/theme";
import { UserProvider } from "@/app/contexts/user";
import { NotesProvider } from "@/app/contexts/note";
import { router } from "@/app/router";
import "./app/config/i18n";
import AppStyles from "@/app/styles";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
    <UserProvider>
        <NotesProvider>
            <AppThemeProvider>
                <AppStyles />
                <RouterProvider router={router} />
                <Toaster position="top-right" />
            </AppThemeProvider>
        </NotesProvider>
    </UserProvider>
);

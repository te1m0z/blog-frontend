import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {} from "mobx-react-lite";
import { AppThemeProvider } from "@/app/contexts/theme";
import { UserContext, UserProvider } from "@/app/contexts/user";
import { NotesProvider } from "@/app/contexts/note";
import { router } from "@/app/router";
import "./app/config/i18n";
import AppStyles from "@/app/styles";
// import { BaseLayout } from "./app/layouts/Base";
// import HomePage from "./pages/Home";
// import NotFoundPage from "@/pages/NotFound";

const root = document.getElementById("root");

const lngs = ["", "ru", "en"];

// const Router = () => {
//     // const userStore = useContext(UserContext);

//     return (
//         <BrowserRouter>
//             <Routes>
//                 {lngs.map((lng) => (
//                     <Route path={lng} Component={BaseLayout} key={lng}>
//                         <Route path="" Component={HomePage} />
//                         <Route
//                             path="notes"
//                             // Component={Component2}
//                             lazy={() => import("@/pages/Notes")}
//                         />
//                         <Route
//                             path="login"
//                             // element={<div>123d</div>}
//                             lazy={() => import("@/pages/Login")}
//                         />
//                         <Route path="*" Component={NotFoundPage} />
//                         {userStore.isAuth && (
//                             <Route
//                                 path="admin"
//                                 lazy={() => import("@/pages/Admin")}
//                             />
//                         )}
//                     </Route>
//                 ))}
//             </Routes>
//         </BrowserRouter>
//     );
// };

ReactDOM.createRoot(root!).render(
    <UserProvider>
        <NotesProvider>
            <AppThemeProvider>
                <AppStyles />
                {/* <Router /> */}
                <RouterProvider router={router} />
                <Toaster position="top-right" />
            </AppThemeProvider>
        </NotesProvider>
    </UserProvider>
);

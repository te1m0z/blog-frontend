import AppHeader from "@/widgets/AppHeader";
import { Outlet } from "react-router-dom";

export function Component() {
    return (
        <div className="layout admin-layout">
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

Component.displayName = 'AdminLayout'

import { Outlet } from "react-router-dom";
import styled from 'styled-components'
import { AppHeader } from "@/widgets/AppHeader";

const Main = styled.main`
  flex-grow: 1;
  margin-top: 40px;
`

export function Component() {
    return (
        <div className="layout admin-layout">
            <AppHeader />
            <Main>
                <div className="container">
                    <Outlet />
                </div>
            </Main>
        </div>
    )
}

Component.displayName = 'AdminLayout'

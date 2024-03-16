import { Outlet } from "react-router-dom";
import styled from 'styled-components'
import AppHeader from "@/widgets/AppHeader";

const Main = styled.main`
  flex-grow: 1;
  margin-top: 40px;
`

export function BaseLayout() {
    return (
        <div className="layout base-layout">
            <AppHeader />
            <Main>
                <div className="container">
                    <Outlet />
                </div>
            </Main>
        </div>
    )
}
import { Outlet } from "react-router-dom";
import styled from 'styled-components'
// import { SIZES } from '@/shared/constants/theme'
import AppHeader from "@/widgets/AppHeader";
// import BackgroundAnimation from "@/widgets/BackgroundAnimation"

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
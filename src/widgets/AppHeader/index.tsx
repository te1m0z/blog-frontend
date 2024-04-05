import { NavLink } from "react-router-dom";
import { useScroll, useTransform } from "framer-motion";
import { observer } from 'mobx-react-lite'
import ThemeToggler from "@/widgets/ThemeToggler";
import * as S from "./styles";
import { UserContext } from "@/app/contexts/user";
import { useContext } from "react";

function Component() {
    const userStore = useContext(UserContext)

    const { scrollY } = useScroll();
    const height = useTransform(scrollY, [0, 100], [100, 60]);

    return (
        <S.Header>
            <div className="container">
                <S.Inner style={{ height }}>
                    <S.LogoBlock>
                        <NavLink to="/">Te1m0z</NavLink>
                    </S.LogoBlock>
                    <S.MenuBlock>
                        <ul>
                            <li>
                                <NavLink to="/notes">Notes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About me</NavLink>
                            </li>
                            {userStore!.getIsAuth ? 'auth' : 'not auth'}
                            {/* {isUserAuth && (
                                <li>
                                    <NavLink to="/admin">admin</NavLink>
                                </li>
                            )} */}
                        </ul>
                    </S.MenuBlock>
                    <S.ThemeBlock>
                        <ThemeToggler />
                    </S.ThemeBlock>
                </S.Inner>
            </div>
        </S.Header>
    );
}

export const AppHeader = observer(Component)

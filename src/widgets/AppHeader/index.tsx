import { observer } from 'mobx-react-lite'
import ThemeToggler from "@/widgets/ThemeToggler";
import { LocaleToggler } from "@/widgets/LocaleToggler";
import { UserContext } from "@/app/contexts/user";
import { useContext } from "react";
import { LocalizedLink } from '@/shared'
import * as S from "./styles";

function Component() {
    // const userStore = useContext(UserContext)

    console.log(`13131`)

    return (
        <S.Header>
            <div className="container">
                <S.Inner>
                    <S.LogoBlock>
                        <LocalizedLink to="/">Te1m0z</LocalizedLink>
                    </S.LogoBlock>
                    <S.MenuBlock>
                        <ul>
                            <li>
                                <LocalizedLink to="/notes">Notes</LocalizedLink>
                            </li>
                            <li>
                                <LocalizedLink to="/portfolio">Portfolio</LocalizedLink>
                            </li>
                            <li>
                                <LocalizedLink to="/about">About me</LocalizedLink>
                            </li>
                            {/* {userStore.isAuth ? 'auth' : 'not auth'} */}
                            {/* {isUserAuth && (
                                <li>
                                    <NavLink to="/admin">admin</NavLink>
                                </li>
                            )} */}
                        </ul>
                    </S.MenuBlock>
                    <S.RightBlock>
                        <S.ThemeBlock>
                            <ThemeToggler />
                        </S.ThemeBlock>
                        <LocaleToggler />
                    </S.RightBlock>
                </S.Inner>
            </div>
        </S.Header>
    );
}

export const AppHeader = Component

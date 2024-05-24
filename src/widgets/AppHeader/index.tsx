import ThemeToggler from "@/widgets/ThemeToggler";
import { LocaleToggler } from "@/widgets/LocaleToggler";
import { UserContext } from "@/app/contexts/user";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { LocalizedLink } from "@/shared";
import * as S from "./styles";

function Component() {
    const userStore = useContext(UserContext);

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
                            {userStore.isAuth && (
                                <li>
                                    <LocalizedLink to="/admin">
                                        Admin
                                    </LocalizedLink>
                                </li>
                            )}
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

export const AppHeader = observer(Component);

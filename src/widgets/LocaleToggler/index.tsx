import { useTranslation } from "react-i18next";
import { Icon, I18N } from "@/shared";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/Tooltip";
import * as S from "./styles";
import cn from "classnames";
import { TAppLocale } from "@/entites/Locale/types/Locale";
import { useNavigate } from "react-router-dom";

export function LocaleToggler() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lng: TAppLocale) => {
        i18n.changeLanguage(lng);

        const [language, ...path] = window.location.pathname
            .slice(1)
            .split("/")

        if (language in I18N.languages) {
            navigate({ ...location, pathname: `/${[lng, ...path].join("/")}` }, { replace: true })
        }
    };

    return (
        <div className="">
            <Tooltip offset={20}>
                <TooltipTrigger>
                    <S.LocaleToggler>
                        <Icon name="locale" size={20} />
                    </S.LocaleToggler>
                </TooltipTrigger>
                <TooltipContent>
                    <S.LocaleTogglerItem
                        className={cn({ active: i18n.language === "en" })}
                        onClick={() => changeLanguage("en")}
                    >
                        EN
                    </S.LocaleTogglerItem>
                    <S.LocaleTogglerItem
                        className={cn({ active: i18n.language === "ru" })}
                        onClick={() => changeLanguage("ru")}
                    >
                        RU
                    </S.LocaleTogglerItem>
                </TooltipContent>
            </Tooltip>
        </div>
    );
}

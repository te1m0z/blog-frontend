import { useTranslation } from "react-i18next";
import { Icon } from "@/shared"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/Tooltip"
import * as S from "./styles"
import cn from "classnames";
import { useNavigate } from "react-router-dom";

export function LocaleToggler() {
    const { i18n } = useTranslation()
    const navigate = useNavigate()

    const changeLanguage = (lng: 'ru' | 'en') => {
        i18n.changeLanguage(lng);
        const currentPath = window.location.pathname;
        const newPath = currentPath.match(/^\/(en|ru)/) 
            ? currentPath.replace(/^\/(en|ru)/, `/${lng}`)
            : `/${lng}${currentPath}`;
        navigate(newPath, { replace: true });
    };

    return (
        <div className="">
            <Tooltip offset={20}>
                <TooltipTrigger>
                    <S.LocaleToggler>
                        <Icon
                            name="locale"
                            size={20}
                        />
                    </S.LocaleToggler>
                </TooltipTrigger>
                <TooltipContent>
                    <S.LocaleTogglerItem
                        className={cn({ active: i18n.language === 'en' })}
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </S.LocaleTogglerItem>
                    <S.LocaleTogglerItem
                        className={cn({ active: i18n.language === 'ru' })}
                        onClick={() => changeLanguage('ru')}
                    >
                        RU
                    </S.LocaleTogglerItem>
                </TooltipContent>
            </Tooltip>
        </div>
    );
}

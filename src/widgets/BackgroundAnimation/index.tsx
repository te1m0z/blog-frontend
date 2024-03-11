import {} from "@/app/contexts/theme";
import { useTheme } from "styled-components";
import { THEME } from "@/shared";
import * as S from "./styles";

export default function BackgroundAnimation() {
    const theme = useTheme();
    const bgColor = THEME.BG_COLOR({ theme });

    const purple = THEME.COLORS.purple;

    const purpleGradientStart = {
        values: `${purple};${bgColor};${bgColor}`,
        dur: "3s",
        repeatCount: "indefinite",
        attributeName: "stop-color",
    };

    const purpleGradientEnd = {
        values: `${bgColor};${bgColor};${purple};`,
        dur: "3s",
        repeatCount: "indefinite",
        attributeName: "stop-color",
    };

    return (
        <S.Parent>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                <defs>
                    <linearGradient
                        id="a"
                        gradientUnits="objectBoundingBox"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0" stop-color={bgColor}>
                            <animate
                                attributeName="stop-color"
                                values="red;"
                                dur="1s"
                                repeatCount="indefinite"
                            ></animate>
                        </stop>
                        <stop offset="0.35" stop-color={bgColor}>
                            <animate
                                attributeName="stop-color"
                                values={bgColor}
                                dur="10s"
                                repeatCount="indefinite"
                            ></animate>
                        </stop>
                        <stop offset="1" stop-color={bgColor}>
                            <animate
                                attributeName="stop-color"
                                values={bgColor}
                                dur="10s"
                                repeatCount="indefinite"
                            ></animate>
                        </stop>
                        <animateTransform
                            attributeName="gradientTransform"
                            type="rotate"
                            from="0 .5 .5"
                            to="360 .5 .5"
                            dur="20s"
                            repeatCount="indefinite"
                        />
                    </linearGradient>
                    <linearGradient id='b' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='1'>
                        <stop offset='0' stop-color='red'>
                            <animate attributeName="stop-color"
                                values="red;purple;blue;green;yellow;orange;red;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <stop offset='1' stop-color='purple' stop-opacity="0">
                            <animate attributeName="stop-color"
                                values="purple;blue;green;yellow;orange;red;purple;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <animateTransform attributeName="gradientTransform" type="rotate" values="360 .5 .5;0 .5 .5" class="ignore"
                            dur="10s" repeatCount="indefinite" />
                    </linearGradient>
                </defs>
                <rect fill="url(#a)" width="100%" height="100%" />
                <rect fill='url(#b)' width='100%' height='100%' />
            </svg> */}
        </S.Parent>
    );
}

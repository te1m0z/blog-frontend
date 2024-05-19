import styled, { createGlobalStyle } from "styled-components";
import { THEME } from "@/shared";

export const GlobalStylesWithTheme = createGlobalStyle`
	body {
		color: ${THEME.TEXT_COLOR};
		background-color: ${THEME.BG_COLOR};
	}
`;

export const GlobalStyles = createGlobalStyle`
	html {
		scrollbar-gutter: stable;
	}

	body {
		font-family: ${THEME.FONT_FAMILIES.oxanium};
		font-size: ${THEME.FONT_SIZES.base};
		font-weight: ${THEME.FONT_WEIGHTS.regular};
		line-height: 1.5;
		color: ${THEME.TEXT_COLOR};
		background-color: ${THEME.BG_COLOR};
		transition: 300ms ease background-color, 300ms ease color;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.layout {
		display: flex;
		flex-flow: column nowrap;
		min-width: 320px;
		min-height: 300vh;
	}

	.container {
		width: 100%;
		max-width: ${THEME.SIZES.siteContainer};
		padding: 0 15px;
		margin: 0 auto;
		height: 100%;
	}

	img {
		object-fit: cover;
	}

	.block-title {
		display: inline-block;
		font-family: ${THEME.FONT_FAMILIES.oxanium};
		font-weight: ${THEME.FONT_WEIGHTS.semiBold};
		font-size: ${THEME.FONT_SIZES.large};
		border-bottom: 1px solid;
	}

	.ant-skeleton ul,
	.ant-skeleton li {
		display: list-item;
	}
`;

export const hoverUnderline = styled.div`
	&.active {
		&::before {
		width: 100%;
		}
  	}

	&:hover {
		&::before {
		width: 100%;
		right: auto;
		left: 0;
		}
	}

  	&::before {
		content: '';
		position: absolute;
		bottom: -10px;
		right: 0;
		width: 0%;
		height: 1px;
		background-color: ${THEME.TEXT_COLOR};
		transition: width 300ms ease;
  	}
`;

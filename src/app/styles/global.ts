import { createGlobalStyle } from 'styled-components'
import { THEME } from '@/shared'

export const GlobalStylesWithTheme = createGlobalStyle`
	body {
		color: ${THEME.TEXT_COLOR};
		background-color: ${THEME.BG_COLOR};
	}
`

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
		min-height: 100vh;
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
`

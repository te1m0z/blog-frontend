import { GlobalStylesWithTheme, GlobalStyles } from './global'
import { ResetStyles } from './reset'

export function AppStyles() {
    return (
        <>
            <ResetStyles />
            <GlobalStylesWithTheme />
            <GlobalStyles />
        </>
    )
}

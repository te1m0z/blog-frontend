import { GlobalStylesWithTheme, GlobalStyles } from './global'
import { ResetStyles } from './reset'

export default function AppStyles() {
    return (
        <>
            <ResetStyles />
            <GlobalStylesWithTheme />
            <GlobalStyles />
        </>
    )
}

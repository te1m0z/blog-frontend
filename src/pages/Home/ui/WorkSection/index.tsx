import { motion } from 'framer-motion'

import * as S from './styles'

const WorkSectionMotion = motion(S.Parent)

export default function WorkSection() {
    return (
        <WorkSectionMotion>
            <S.Title className="block-title">
                Work
            </S.Title>
            <S.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </S.Content>
        </WorkSectionMotion>
    )
}

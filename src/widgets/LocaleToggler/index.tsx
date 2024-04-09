import { Icon } from '@/shared'
import * as S from './styles'
import { Tooltip } from '@/shared/ui/Tooltip'

export function LocaleToggler() {
  // const tooltipParentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="">
      <S.LocaleToggler>
          <Icon
            name="locale"
            size={20}
          />
        </S.LocaleToggler>
        <Tooltip
          renderOpener={(props) => <button {...props}>open</button>}
          placement={'bottom'}
          content={'dwadawd'}
        />
    </div>
  )
}

import { Icon } from '@/shared'
import * as S from './styles'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/shared/ui/Tooltip'

export function LocaleToggler() {
  // const tooltipParentRef = useRef<HTMLDivElement>(null)

  console.trace('LocaleToggler')

  return (
    <Tooltip placement={'bottom'} offset={20}>
      123
      {/* <TooltipTrigger>
        <S.LocaleToggler>
          <Icon
            name="locale"
            size={20}
          />
        </S.LocaleToggler>
      </TooltipTrigger>
      <TooltipContent>
        Hello
      </TooltipContent> */}
    </Tooltip>
  )
}

import { type ReactNode } from 'react'
import type { Placement } from "@floating-ui/react"

export interface ITooltipProps {
    initialOpen?: boolean
    placement?: Placement
    offset?: number
    open?: boolean
    onOpenChange?: (open: boolean) => void;
    children: ReactNode
}

// type ContextType = ReturnType<typeof useTooltip> | null;

// const TooltipContext = createContext<ContextType>(null)

export function Tooltip({ children, ...options }: ITooltipProps) {
    // const tooltip = useTooltip(options);

    console.log('Tooltip', children, options)

    return (
        <div className="">
            {children}
        </div>
    );
}

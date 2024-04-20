import type { ReactElement, ReactNode, HTMLAttributes } from "react";
import { Children, cloneElement, forwardRef, useState } from "react";
import {
    useFloating,
    offset,
    flip,
    shift,
    autoUpdate,
    useInteractions,
    useHover,
    useFocus,
    useDismiss,
    safePolygon,
    useTransitionStyles
} from "@floating-ui/react";
import * as S from './styles'

interface ITooltipProps {
    offset?: number
    children: ReactElement<HTMLDivElement>[]
}

export function Tooltip(props: ITooltipProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(props.offset || 10), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, {
        handleClose: safePolygon(),
    });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const { isMounted, styles } = useTransitionStyles(context, {
        initial: {
            opacity: 0,
            top: 10,
        },
        open: {
            opacity: 1,
            top: 0,
        },
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
    ]);

    return Children.map(props.children, (child) => {
        if (child.type === TooltipTrigger) {
            return cloneElement(child as ReactElement, {
                ref: refs.setReference,
                referenceProps: getReferenceProps(),
            });
        }
        if (child.type === TooltipContent) {
            return cloneElement(child as ReactElement, {
                open: isMounted,
                ref: refs.setFloating,
                style: {
                    ...floatingStyles,
                    ...styles,
                },
                floatingProps: getFloatingProps(),
            });
        }
        return child;
    });
}

interface ITooltipTriggerProps {
    referenceProps?: HTMLAttributes<HTMLDivElement>;
    children: string | ReactNode | ReactNode[];
}

export const TooltipTrigger = forwardRef<HTMLDivElement, ITooltipTriggerProps>(
    (props, ref) => {
        return (
            <div
                ref={ref}
                className="tooltip-trigger"
                {...props.referenceProps}
            >
                {props.children}
            </div>
        );
    }
);

interface ITooltipContentProps {
    open?: boolean;
    style?: CSSStyleDeclaration | object;
    floatingProps?: HTMLAttributes<HTMLDivElement>;
    children: string | ReactNode | ReactNode[];
}

export const TooltipContent = forwardRef<HTMLDivElement, ITooltipContentProps>(
    (props, ref) => {
        return (
            <>
                {props.open && (
                    <S.TooltipContent
                        ref={ref}
                        style={props.style}
                        {...props.floatingProps}
                    >
                        {props.children}
                    </S.TooltipContent>
                )}
            </>
        );
    }
);

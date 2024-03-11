import type { ReactNode, ReactElement, ChangeEvent } from "react";
import React, { useRef, useMemo } from "react";
import cn from "classnames";
import * as S from './styles'

interface InputProps {
    value: string
    type?: 'text' | 'email' | 'password' | 'number' | 'tel'
    label?: string
    disabled?: boolean;
    autocomplete?: 'off' | 'on'
    error?: string;
    labelClass?: string
    onInput?: (e: ChangeEvent<HTMLInputElement>) => void
    onClick?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    children?: ReactNode | ReactNode[]
}

export default function InputText(props: InputProps) {
    const tooltipParentRef = useRef<HTMLDivElement | null>(null);
    const inputValueRef = useRef<HTMLInputElement | null>(null)

    const type = props.type || 'text'
    const label = props.label || ''
    const disabled = props.disabled || false;
    const autocomplete = props.autocomplete || 'off'
    const error = props.error || "";
    const labelClass = props.labelClass || '';
    const onInput = props.onInput || (() => { });
    const onClick = props.onClick || (() => { });
    const onFocus = props.onFocus || (() => { });
    const onBlur = props.onBlur || (() => { });

    let leftSidebar: ReactElement | undefined;
    let rightSidebar: ReactElement | undefined;

    const [isFocused, setIsFocused] = React.useState(false)

    React.Children.forEach(props.children, (child) => {
        if (!React.isValidElement(child)) {
            return
        }

        if (child.type === 'LeftSidebar') {
            leftSidebar = child;
        }

        if (child.type === 'RightSidebar') {
            rightSidebar = child;
        }
    });

    const isActive = useMemo(() => {
        return isFocused || props.value.length > 0
    }, [isFocused, props.value.length])

    //e: MouseEvent<HTMLInputElement>
    function focusInput() {
        if (!inputValueRef.current) {
            return
        }
        setIsFocused(true)
        inputValueRef.current.focus()
        onFocus()
    }

    function onFocusHandler() {
        if (isFocused) {
            return
        }
        focusInput()
    }

    function onBlurHandler() {
        if (!isFocused) {
            return
        }
        setIsFocused(false)
        onBlur()
    }

    return (
        <S.Input
            ref={tooltipParentRef}
            className={cn("input", { disabled, error })}
            onClick={onClick}
        >
            {leftSidebar}

            <S.InputContent className="input-content" onClick={onFocusHandler}>
                {label.length > 0 && (
                    <S.InputLabel
                        className={cn('input-label', labelClass, { 'active': isActive })}
                    >
                        {label}
                    </S.InputLabel>
                )}
                
                <S.InputValue
                    type={type}
                    ref={inputValueRef}
                    value={props.value}
                    autoComplete={autocomplete}
                    onInput={onInput}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />

                {/* <Transition name="fade">
                    <ErrorMessage
                        :name="name"
                        :class="['input-error', errorClass]"
                    />
                </Transition> */}
            </S.InputContent>

            {rightSidebar}
        </S.Input>
    );
}

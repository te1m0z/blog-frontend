import { forwardRef } from 'react'

export const TooltipTrigger = forwardRef(function TooltipTrigger(props, ref) {
    console.log('TooltipTrigger', props, ref)
    // const context = useTooltipContext();
    // console.log('children', children)
    // const childrenRef = (children as React.ReactElement).ref
    // const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // // `asChild` allows the user to pass any element as the anchor
    // if (asChild && React.isValidElement(children)) {
    //     return React.cloneElement(
    //         children,
    //         context.getReferenceProps({
    //             ref,
    //             ...props,
    //             ...children.props,
    //             "data-state": context.open ? "open" : "closed",
    //         })
    //     );
    // }

    return (
        <button
        >
            123
        </button>
    );
});
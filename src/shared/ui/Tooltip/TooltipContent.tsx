import { forwardRef } from 'react'

export const TooltipContent = forwardRef(function (props, ref) {
    // const context = useTooltipContext();
    // const ref = useMergeRefs([context.refs.setFloating, propRef]);
    // if (!context.open) return null;

    console.log('TooltipContent', props, ref)

    return (
        <div className="tooltip">
            hello
        </div>
    )
})

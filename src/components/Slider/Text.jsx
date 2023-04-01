import {forwardRef} from "react";
import {motion} from 'framer-motion';

export const Text = forwardRef(({tag: Tag = 'p', className, children, ...attrs}, ref) => {

    return (
        <Tag ref={ref} className={className} {...attrs}>
            {children}
        </Tag>
    )
})

export const MText = motion(Text)
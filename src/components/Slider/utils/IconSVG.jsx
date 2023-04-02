import {forwardRef} from "react";
import classNames from 'classnames';
import iconsSVG from './IconsSVG.svg';

export const IconSVG = forwardRef(
    ({tag: Tag = 'svg', idsymbol, className, title, fill, stroke, size, onClick, disabled, active, ...attrs}, ref) => {
        const classes = classNames('icon', className, {func: onClick}, {active}, {disabled})
        return (
            <Tag ref={ref} className={classes} id={idsymbol} title={title} fill={fill} stroke={stroke} width={size}
                 height={size} onClick={disabled ? null : onClick} {...attrs}>
                <g>
                    {title && <title>{title}</title>}
                    <use xlinkHref={`${iconsSVG}#${idsymbol}`}/>
                </g>
            </Tag>
        )
    }
)
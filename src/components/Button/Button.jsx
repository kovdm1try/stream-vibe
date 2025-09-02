import "./Button.scss"
import classNames from "classnames"
import Icon from "@/components/Icon";

const Button = (props) => {
    const {
        className,
        href,
        type = 'button',
        target,
        mode = '', // ''(default) || 'transparent'
        label,
        isLabelHidden = false,
        iconName,
        iconPosition = 'before', // before | after
    } = props

    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button' // если есть линк то будет создаваться <a> иначе <button>
    // Т.к. далее будем использовать как компонет, поэтому называем строго с большой буквы

    const linkProps = {href, target}
    const buttonProps = {type}
    const specProps = isLink ? linkProps : buttonProps
    const title = isLabelHidden ? label : undefined
    const iconComponent = iconName && (
        <Icon
            className={"button__icon"}
            name={iconName}
        />)

    return (
        <Component
            className={classNames(className, "button", {
                [`button--${mode}`]: mode, // если значение вычисляемое, то пишем в квадратных скобках
            })}
            aria-label={title}
            title={title}
            {...specProps}
        >
            {iconPosition === 'before' && iconComponent}
            {/* span будет отображаться только тогда, когда isLabelHidden = false*/}
            {!isLabelHidden && (
                <span className={'button__label'}>
                    {label}
                </span>
            )}
            {iconPosition === 'after' && iconComponent}
        </Component>
    )
}

export default Button

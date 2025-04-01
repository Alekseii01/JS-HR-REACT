import style from './Button.module.scss'

export const Button = ({ children, variant = 'primary', size = 'medium' }) => (
    <button className={`${style.button} ${style[variant]} ${style[size]}`}>
        {children}
    </button>
)

export const ButtonMenu = ({ children, variant = 'secondary', size = 'medium' }) => (
    <button className={`${style.button} ${style[variant]} ${style[size]}`}>
        {children}
    </button>
)

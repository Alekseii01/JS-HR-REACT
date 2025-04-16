import style from './Button.module.scss'

export const Button = ({ children, variant = 'primary', size = 'medium', type = 'regular' }) => (
    <button className={`${style.button} ${style[variant]} ${style[size]} ${style[type]}`}>
        {children}
    </button>
);
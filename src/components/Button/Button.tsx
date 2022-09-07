import React from 'react';
import classnames from 'classnames-creator'

//? v.01 CSS styles
import styles from './Button.module.css'

//? v.02 SCSS styles
// import styles from './Button.module.scss'

//? v.03 SCSS styles
// import styles from './style.module.css'

//? v.04 SCSS styles
// import styles from './style.module.scss'

// This allows us to use any button-specific props: disabled, type, name, etc
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    mode?: 'rounded' | 'square'
}

export default function Button({ text, onClick, mode = 'rounded', ...rest }: Props) {

    const classes = classnames(
        styles.button,
        {
            [styles[mode ?? '']]: mode
        },
    )

    return (

        <button
            className={classes}
            onClick={onClick}
            {...rest}
        >
            {text}
        </button>

    )
}

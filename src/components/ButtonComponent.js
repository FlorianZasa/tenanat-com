import React from 'react'
import { Styles } from '../constants/Styles'

function ButtonComponent({ text, icon=null, theme, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{...theme, ...Styles.button}}
        >
            {icon && icon} {text}
        </button>
    )
}

export default ButtonComponent
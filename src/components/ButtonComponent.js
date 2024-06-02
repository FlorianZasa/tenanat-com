import React from 'react'
import { Styles } from '../constants/Styles'

function ButtonComponent({ text, theme, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{...theme, ...Styles.button}}
        >{text}</button>
    )
}

export default ButtonComponent
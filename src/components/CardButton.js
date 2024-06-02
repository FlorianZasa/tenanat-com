import React from 'react'
import { Colors } from '../constants/Colors'

function CardButton({ text, icon, theme }) {
  return (
    <button style={{...theme, display: 'flex',
        flexDirection: 'column',
        padding: '1.2rem',
        borderRadius: 10,
        fontSize: 18,
        border: "none",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
    }}>
        <div style={{display: 'flex', alignItems: 'center'}}>
            {icon} {text}
        </div>
    </button>
  )
}

export default CardButton
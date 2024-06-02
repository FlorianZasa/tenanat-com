import React from 'react'

function SeperatorComponent({ text = null }) {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#adadad'}}>
        <div style={{height: 1, width: '40%', borderBottom: '1px solid #adadad'}}></div>
        {text !== null ? text : "*"}
        <div style={{height: 1, width: '40%', borderBottom: '1px solid #adadad'}}></div>
    </div>
  )
}

export default SeperatorComponent
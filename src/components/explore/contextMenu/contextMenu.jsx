import React from 'react'

//styled components
import {
    Div, 
} from './style.js'

export const ContextMenu = ({target}) => {
  return (
    <Div style={{ top: target.y, left: target.x }}>{target.name}</Div>
  )
}

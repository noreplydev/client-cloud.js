import React, { useContext } from 'react'
import { WorkspaceContext } from '../../context/workspaceContext.js'
import {
    Parent, 
} from './style.js'
import { UsageLine } from './usageLine/usageLine.jsx'

export const Details = () => {
  const {workspace} = useContext(WorkspaceContext)

  return (
    <Parent>
      <UsageLine/>  
      {workspace.currentFile.name}
    </Parent>
  )
}

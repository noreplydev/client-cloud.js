import React, { useContext } from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext'

export const UsageLine = () => {
  const {workspace} = useContext(WorkspaceContext)
  
  return (
    <div>
      <p>{workspace.CWD}</p>
    </div>
  )
}

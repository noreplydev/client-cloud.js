import React, { useContext } from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext.js'
import {
    Parent, 
} from './style.js'

export const Details = () => {
  const {workspace} = useContext(WorkspaceContext)

  return (
    <Parent>{workspace.currentFile.name}</Parent>
  )
}

import React, { useContext } from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext.js'
import {
    Parent, 
    Filename, 
    Title, 
    Text
} from './style.js'
import { UsageLine } from '../usageLine/usageLine.jsx'

export const Details = () => {
  const {workspace} = useContext(WorkspaceContext)
  const name = workspace.currentFile.name
  const extension = workspace.currentFile.extension === '-' ? '' : workspace.currentFile.extension

  return (
    <Parent>
      <UsageLine/>  
      <Filename>{name+extension}</Filename>
      <Title>Full path</Title>
      <Text>{workspace.currentFile.url}</Text>
    </Parent>
  )
}

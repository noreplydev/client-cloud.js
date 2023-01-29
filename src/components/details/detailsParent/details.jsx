import React, { useContext } from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext.js'
import {
    Parent, 
    Filename, 
    Title, 
    Text
} from './style.js'
import { UsageLine } from '../usageLine/usageLine.jsx'
import { SizeOnFolder } from '../sizeOnFolder/sizeOnFolder.jsx'

export const Details = () => {
  const {workspace} = useContext(WorkspaceContext)
  const file = workspace.currentFile

  const extension = file.extension === '-' ? '' : file.extension

  return (
    <Parent>
      <UsageLine/>  
      <Filename>{file.name+extension}</Filename>
      <Title>Full path</Title>
      <Text>{workspace.currentFile.url}</Text>
      <SizeOnFolder/>
    </Parent>
  )
}

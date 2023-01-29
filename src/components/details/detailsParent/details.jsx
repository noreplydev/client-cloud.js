import React, { useContext } from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext.js'
import {
    Parent,
    Button, 
    Wrapper,  
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
      <Button>Upload file</Button>
      <UsageLine/> 
      <Wrapper>
        <Title>Filename</Title>
        <Text>{file.name+extension}</Text>
        <Title>Full path</Title>
        <Text>{workspace.currentFile.url}</Text>
        <SizeOnFolder/>
      </Wrapper>
    </Parent>
  )
}

import React, { useContext } from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext'

import {
  Container, 
  FolderName, 
  UsageLineContainer, 
  Percentage
} from './style.js'

export const UsageLine = () => {
  const {workspace} = useContext(WorkspaceContext)
  const colors = ['#00FF85', '#149CE8', '#F0CE54', '#FD5757']

  return (
    <Container>
      <FolderName>./{workspace.CWD}</FolderName>
      <UsageLineContainer>
        {
          workspace.folderUsage.map((item, index) => {
            return (
              <Percentage 
                key={item} 
                color={colors[index]}
                percentage={item[1]} // 0: name, 1: percentage ['.pdf', 34%]
              ></Percentage>
            )
          })
        }
      </UsageLineContainer>
    </Container>
  )
}

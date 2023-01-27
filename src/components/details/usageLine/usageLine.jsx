import React, { useContext } from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext'

import {
  Container, 
} from './style.js'

export const UsageLine = () => {
  const {workspace} = useContext(WorkspaceContext)
  const colors = ['#00FF85', '#149CE8', '#F0CE54', '#FD5757']

  return (
    <Container>
      <p>{workspace.CWD}</p>
      <div>
        {
          workspace.folderUsage.map((unused, index) => {
            return (
              <div></div>
            )
          })
        }
      </div>
    </Container>
  )
}

import React from 'react'
import { FileExplorer } from '../../components/explore/fileExplorer/fileExplorer.jsx'
import { Details } from '../../components/explore/details/details.jsx'

//styled components
import {
    Parent,
    Separator, 
} from './style.js'
import { DownloadProvider } from '../../context/downloadContext.js'
import { WorkspaceProvider } from '../../context/workspaceContext.js'

export const Explore = () => {
  return (
    <WorkspaceProvider>
      <DownloadProvider>
        <Parent>
          <FileExplorer/>
          <Separator></Separator>
          <Details/>
        </Parent>
      </DownloadProvider>
    </WorkspaceProvider>
  )
}

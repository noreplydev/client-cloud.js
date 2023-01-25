import React, {useContext} from 'react'

// styled components
import {
  Table,
  TitleContainer, 
  Title,
  EntrysContainer
} from './style.js'

import { EntryRow } from '../entryRow/entryRow.jsx'
import { DownloadProgress } from '../downloadProgress/downloadProgress.jsx'
import { DownloadContext } from '../../../context/downloadContext.js'


export const FilesList = ({ entries }) => {
  const { download } = useContext(DownloadContext);
  
  return (
    <Table>
        <TitleContainer>
            <Title width="50%">Name</Title>
            <Title width="20%">Extension</Title>
            <Title width="20%">Created on</Title>
            <Title width="20%">at</Title>
            <Title width="20%" last>Size</Title>
        </TitleContainer>
        <EntrysContainer id="entries-container">                                                                                                                                                                               
          { 
            entries.map((file, index) => {
              return (
                <EntryRow file={file} key={index}/>
              )
            })
          }
        </EntrysContainer>
        { download && <DownloadProgress />}
    </Table>
  )
}
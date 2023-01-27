import React, {useState, useEffect, useContext} from 'react'
import { fetchData } from '../../../APIs/fetchData.js'
import { FilesList } from '../filesList/fileList.jsx'
import { 
    Parent,
    SearchContainer, 
    P, 
    InlineContainer, 
    FolderGray, 
    Searchbar, 
    Button
} from './style.js'

import folderIconGray from '../../../assets/icons/folder-icon-gray.svg'
import { WorkspaceContext } from '../../../context/workspaceContext.js'
import { NoEntries } from '../noEntries/noEntries.jsx'

export const FileExplorer = () => {
  const { workspace, updateWorkspace } = useContext(WorkspaceContext)
  const [filter, setFilter] = useState('')

  useEffect( () => {
    ( async () => {
      await fetchData(workspace, updateWorkspace);
    })(); 
  }, []) // eslint-disable-line

  return (
    <Parent>
      <SearchContainer>
        <P>
          <FolderGray src={folderIconGray} alt="cloud"/>
          <span>files/</span>
          {workspace.path}
        </P>
        <InlineContainer>
          <Searchbar type="text" placeholder="sample-file" onChange={(e) => setFilter(e.target.value.toLowerCase())}/>
          <Button>
            create
          </Button>
        </InlineContainer>
      </SearchContainer>
      {
        workspace.data 
        ?  <FilesList entries={workspace.data.content.filter(entry => entry.name.toLowerCase().includes(filter))}/>
        :  <NoEntries/>
      }
    </Parent>
  )
}

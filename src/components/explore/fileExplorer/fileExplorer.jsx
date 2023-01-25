import React, {useState, useEffect, useContext} from 'react'
import { getData } from '../../../APIs/fetchData.js'
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

export const FileExplorer = () => {
  const { workspace } = useContext(WorkspaceContext)
  const [data, setData] = useState()
  const [filter, setFilter] = useState('')
  
  useEffect( () => {
    async function fetchData() {
      const data = await getData(workspace.segments)
      setData(data)
    }
    fetchData();
  }, [workspace])

  return (
    <Parent>
      <SearchContainer>
        <P>
          <FolderGray src={folderIconGray} alt="cloud"/>
          <span>/files</span></P>
        <InlineContainer>
          <Searchbar type="text" placeholder="sample-file" onChange={(e) => setFilter(e.target.value.toLowerCase())}/>
          <Button>
            create
          </Button>
        </InlineContainer>
      </SearchContainer>
      {
        data && <FilesList entries={data.content.filter(entry => entry.name.toLowerCase().includes(filter))}/>
      }
    </Parent>
  )
}

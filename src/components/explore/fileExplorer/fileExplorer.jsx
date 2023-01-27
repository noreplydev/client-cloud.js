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
import { NoEntries } from '../noEntries/noEntries.jsx'

export const FileExplorer = () => {
  const { workspace, updateWorkspace } = useContext(WorkspaceContext)
  const [path, setPath] = useState('')
  const [data, setData] = useState()
  const [filter, setFilter] = useState('')

  useEffect( () => {
    async function fetchData() {
      const data = await getData(workspace.segments)

      // set the searchbar path
      const segments = workspace.segments 
      const printablePath = workspace.segments.length <= 3 
        ? segments.join('/')
        : ' …/'+segments.slice(segments.length-3, segments.length).join('/')

      setPath(printablePath)
      updateWorkspace({
        ...workspace,
        folderUsage: data.folder_usage
      })
      
      // set the last to avoid changing the directory before the path
      setData(data)
    }
    fetchData();
  }, []) // eslint-disable-line

  return (
    <Parent>
      <SearchContainer>
        <P>
          <FolderGray src={folderIconGray} alt="cloud"/>
          <span>files/</span>
          {path}
        </P>
        <InlineContainer>
          <Searchbar type="text" placeholder="sample-file" onChange={(e) => setFilter(e.target.value.toLowerCase())}/>
          <Button>
            create
          </Button>
        </InlineContainer>
      </SearchContainer>
      {
        data 
        ?  <FilesList entries={data.content.filter(entry => entry.name.toLowerCase().includes(filter))}/>
        :  <NoEntries/>
      }
    </Parent>
  )
}

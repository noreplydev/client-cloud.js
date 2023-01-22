import React, {useState, useEffect} from 'react'
import { getData } from '../../../utils/formatData.js'
import { FilesList } from '../filesList/fileList.jsx'
import { 
    Parent,
    SearchContainer, 
    P, 
    InlineContainer, 
    Searchbar, 
    Button
} from './style.js'

export const FileExplorer = () => {
  const [data, setData] = useState(undefined)
  
  useEffect( () => {
    async function fetchData() {
      const data = await getData()
      setData(data)
    }

    fetchData();
  }, [])

  return (
    <Parent>
      <SearchContainer>
        <P><span>/cloud</span></P>
        <InlineContainer>
          <Searchbar type="text" placeholder="sample-file.txt"/>
          <Button>
            create
          </Button>
        </InlineContainer>
      </SearchContainer>
      {
        data && <FilesList data={data}/>
      }
    </Parent>
  )
}

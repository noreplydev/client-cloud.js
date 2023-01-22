import React from 'react'
import { 
    Parent,
    SearchContainer, 
    P, 
    InlineContainer, 
    Searchbar, 
    Button
} from './style.js'

export const FileExplorer = () => {
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
      
    </Parent>
  )
}

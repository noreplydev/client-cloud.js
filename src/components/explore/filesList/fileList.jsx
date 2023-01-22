import React, {useEffect, useState} from 'react'

// styled components
import {
  Table,
  TitleContainer, 
  Title,
  EntrysContainer,
  Row,
  Entry, 
  Img
} from './style.js'

import folder from '../../../assets/icons/folder-icon.svg'

export const FilesList = ({ data }) => {
  const [entrys, setEntrys] = useState({...data})

  useEffect(() => {
    console.log(data)
    console.log(entrys); 
  }, [entrys, data])

  return (
    <Table>
        <TitleContainer>
            <Title width="50%">Name</Title>
            <Title width="20%">Extension</Title>
            <Title width="20%">Created on</Title>
            <Title width="20%">at</Title>
            <Title width="20%" last>Size</Title>
        </TitleContainer>
        <EntrysContainer>
          { 
            entrys.content.map((file, index) => {
              return (
                <Row key={index}>
                  <Entry width="50%">
                    { file.dir && <Img src={folder} alt="folder-icon"/> }
                    {file.name}
                  </Entry>
                  <Entry width="20%">{file.extension}</Entry>
                  <Entry width="20%">{file.created_on}</Entry>
                  <Entry width="20%">{file.at}</Entry>
                  <Entry width="20%" last>{file.size}</Entry>
                </Row>
              )
            })
          }
        </EntrysContainer>
    </Table>
  )
}
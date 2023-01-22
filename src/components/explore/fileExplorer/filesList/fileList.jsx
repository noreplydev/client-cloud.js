import React, {useEffect, useState} from 'react'

// styled components
import {
  Table,
  TitleContainer, 
  Title,
  EntrysContainer,
  Row,
  Entry
} from './style.js'
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
            entrys.content.files.map( (file, index) => {
              return (
                <Row key={index}>
                  <Entry width="50%">{file.name}</Entry>
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
import React from 'react'
import {
  Row,
  Entry, 
  Img
} from './style.js'

import folder from '../../../assets/icons/folder-icon.svg'

export const EntryRow = ({ file, index }) => {
  return (
    <Row key={index} id='row'>
      <Entry width="50%">
        {file.dir && <Img src={folder} alt="folder-icon"/>}
        {file.name}
      </Entry>
      <Entry width="20%">{file.extension}</Entry>
      <Entry width="20%">{file.created_on}</Entry>
      <Entry width="20%">{file.at}</Entry>
      <Entry width="20%" last>{file.size}</Entry>
    </Row>
  )
}

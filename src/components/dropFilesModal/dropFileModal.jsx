import React, { useContext, useState } from 'react'

import {
  ModalContainer, 
  Modal, 
  Form,
  Input,
  Title, 
  Text, 
  DragZone, 
  DropText, 
  File
} from './style.js'

import DropFile from '../../assets/icons/drop-file.svg'
import { WorkspaceContext } from '../../context/workspaceContext.js'

export const DropFilesModal = ({setShowDropFiles}) => {
  const {workspace} = useContext(WorkspaceContext)
  const [dragActive, setDragActive] = useState(false);

  // handle drag events
  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }

    console.log(e.type);
  };

  return (
    <ModalContainer onClick={() => setShowDropFiles(false)}>
      <Modal>
        <Form onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag}>
          <Input type="file" multiple={true}/>
          <Title>Upload on</Title>
          <Text>/files/{workspace.path}</Text>
          <DragZone className={dragActive ? 'dropActive' : ''}>
            <DropText>Drop files</DropText>
            <File xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.29 78">
              <path d="M268.54,289H231.46a10.11,10.11,0,0,1-10.11-10.11V221.11A10.11,10.11,0,0,1,231.46,211h27.15a10.12,10.12,0,0,1,7.39,3.21l9.92,10.61a10.11,10.11,0,0,1,2.73,6.9v47.17A10.11,10.11,0,0,1,268.54,289Z" transform="translate(-221.35 -211)"/>
            </File>

          </DragZone>
        </Form>
      </Modal>
    </ModalContainer>
  )
}

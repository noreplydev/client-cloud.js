import React, { useContext, useState, useRef } from 'react'

import {
  ModalContainer, 
  Modal, 
  Form,
  Input,
  Title, 
  Text, 
  DragZone, 
  DropText, 
  File,
  SelectButton
} from './style.js'

import { WorkspaceContext } from '../../context/workspaceContext.js'

export const DropFilesModal = ({setShowDropFiles}) => {
  const {workspace} = useContext(WorkspaceContext)
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState([])

  const input = useRef(null)

  function closeModal(e) {
    e.preventDefault()
    setShowDropFiles(false)
  }

  // handle drag events
  function handleDrag(e) {
    e.preventDefault();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {  
      setFiles(prev => [...prev, ...e.dataTransfer.files]); 
    }
  };

  // triggers when file is selected with click
  function handleChange(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files)
      setFiles(prev => [...prev, ...e.target.files]) 
    }
  };
    
  // open file manager to select files
  function openFileManager(e) {
    e.preventDefault()
    input.current.click()
  }

  async function sendData(e) {
    e.preventDefault()

    await fetch(`http://192.168.0.13:3000/upload`, {
      method: 'POST',
      body: files,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }

  return (
    <ModalContainer onClick={closeModal}>
      <Modal onClick={e => e.stopPropagation()}>
        <Form onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
          <Input type="file" name="file" multiple={true} onChange={handleChange} ref={input}/>
          <Title>Upload on</Title>
          <Text>/files/{workspace.path}</Text>
          <DragZone 
            className={dragActive ? 'dropActive' : ''} 
            onDragEnter={handleDrag} 
            onDragOver={handleDrag} 
            onDragLeave={handleDrag} 
            onDrop={handleDrop}
            >
            <DropText>Drop files <br></br> or 
              <SelectButton onClick={openFileManager}>select</SelectButton>
            </DropText>
            <File xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.29 78">
              <path d="M268.54,289H231.46a10.11,10.11,0,0,1-10.11-10.11V221.11A10.11,10.11,0,0,1,231.46,211h27.15a10.12,10.12,0,0,1,7.39,3.21l9.92,10.61a10.11,10.11,0,0,1,2.73,6.9v47.17A10.11,10.11,0,0,1,268.54,289Z" transform="translate(-221.35 -211)"/>
            </File>
          </DragZone>
        </Form>

        {
          files[0] && files.map(file => {
            return <p>{file.name}</p>
          })
        }

        <button onClick={sendData}>send</button>
      </Modal>
    </ModalContainer>
  )
}

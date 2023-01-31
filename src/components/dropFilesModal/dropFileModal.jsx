import React from 'react'

import {
  ModalContainer, 
  Modal, 
  Form,
  Input,
  ImageWrapper,  
  Img, 
  ImgHover,
  Text
} from './style.js'

import DropFile from '../../assets/icons/drop-file.svg'
import DropFileHover from '../../assets/icons/drop-file-hover.svg'

export const DropFilesModal = ({setShowDropFiles}) => {

  return (
    <ModalContainer onClick={() => setShowDropFiles(false)}>
      <Modal>
        <Form>
          <Input type="file" multiple={true}/>
          <ImageWrapper>
            <Img src={DropFile} alt="drop files here" id='drop-file'/>
            <ImgHover src={DropFileHover} hover alt="drop files here" id='drop-file-hover'/>
          </ImageWrapper>
          <Text>
            Upload files
          </Text>
        </Form>
      </Modal>
    </ModalContainer>
  )
}

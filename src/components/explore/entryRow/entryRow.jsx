import React, {useState} from 'react'
import {
  Row,
  Entry, 
  Folder, 
  Download, 
  Tag,
  Container,
  Name
} from './style.js'

import folder from '../../../assets/icons/folder-icon.svg'
import download from '../../../assets/icons/download-icon.svg'
import { downloadFile, hideToast, showToast } from '../../../events/downloadButton.js'

export const EntryRow = ({ file, index }) => {
  const [visible, setVisible] = useState(false); 
  const filename = file.name.length > 20 ? file.name.slice(0, 20) + ('…') : file.name

  return (
    <Row key={index}>
      <Entry width="50%">
        {file.dir && <Folder src={folder} alt="folder-icon" size='.7rem'/>}
        <Name>{filename}</Name>
        {!file.dir && 
          <Container>
            <Download 
              src={download} 
              onClick={(file) => downloadFile(file)}
              onMouseOver={(e) => showToast(e, setVisible)} 
              onMouseLeave={(e) => hideToast(e, setVisible)}
              alt="download-icon"
            />
            {visible && <Tag>click to download</Tag>}
          </Container>
        }
      </Entry>
      <Entry width="20%">{file.extension}</Entry>
      <Entry width="20%">{file.created_on}</Entry>
      <Entry width="20%">{file.at}</Entry>
      <Entry width="20%" last>{file.size}</Entry>
    </Row>
  )
}

import React, {useContext} from 'react'
import { DownloadContext } from '../../../context/downloadContext.js'

import {
  Container,
  TextContainer,  
  Text,
  ProgressContainer, 
  Progress 
} from './style.js'

export const DownloadProgress = () => {
  const { download } = useContext(DownloadContext)
  return (
    <Container>
      <TextContainer>
        <Text></Text>
        <Text color='#0055ff' align='center'>{download.status}</Text>
        <Text color='#898989' align='right'>{download.file}</Text>
      </TextContainer>
      <ProgressContainer>
        <Progress></Progress>
      </ProgressContainer>
    </Container>
  )
}

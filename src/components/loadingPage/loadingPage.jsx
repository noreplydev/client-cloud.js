import React from 'react'

import {
  Blank, 
  Animation, 
  Img, 
  Data, 
  Text
} from './style.js'

import {config} from '../../config.js'
import server from '../../assets/icons/server-icon.svg'
import folder from '../../assets/icons/folder-icon-outline.svg'

export const LoadingPage = () => {
  const { PROTOCOL, HOSTNAME, PORT } = config

  return (
    <Blank>
      <Animation>
        <Img src={server} alt="server"/>
        <Data>011011</Data>
        <Img src={folder} alt="folder"/>
      </Animation>
      <Text>Loading data</Text>
      <Text color='#898989'>{PROTOCOL}://{HOSTNAME}:{PORT}</Text>
    </Blank>
  )
}

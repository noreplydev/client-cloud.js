import React from 'react'
import server from '../../../assets/icons/server.svg'
import {config} from '../../../config.js'

import {
  Parent, 
  Img, 
  Text, 
} from './style.js'

export const NoEntries = () => {
  const { PORT, PROTOCOL, HOSTNAME } = config

  return (
    <Parent>
      <Img src={server} alt="server"/>
      <Text margin='10px'>{PROTOCOL}://{HOSTNAME}:{PORT} </Text>
      <Text>We can’t find the <br></br> data source</Text>
    </Parent>
  )
}

import React, {useEffect, useState, useRef} from 'react'

// styled components
import {
  Table,
  TitleContainer, 
  Title,
  EntrysContainer
} from './style.js'

import { EntryRow } from '../entryRow/entryRow.jsx'
import { ContextMenu } from '../contextMenu/contextMenu.jsx'
import { showMenu } from '../../../events/showMenu.js'

export const FilesList = ({ data }) => {
  const [entrys, setEntrys] = useState({...data})
  const [target, setTarget] = useState(null)

  const ref = useRef(null)

  useEffect(() => {
    const tableElement = ref.current
    window.addEventListener('contextmenu', (e) => showMenu(e, target, setTarget))
    return () => {
      window.removeEventListener('contextmenu', (e) => showMenu(e, target, setTarget))
    }
  }, []) //eslint-disable-line

  return (
    <Table ref={ref}>
        <TitleContainer>
            <Title width="50%">Name</Title>
            <Title width="20%">Extension</Title>
            <Title width="20%">Created on</Title>
            <Title width="20%">at</Title>
            <Title width="20%" last>Size</Title>
        </TitleContainer>
        <EntrysContainer>
          { target && <ContextMenu target={target}/> }
          { 
            entrys.content.map((file, index) => {
              return (
                <EntryRow file={file} key={index}/>
              )
            })
          }
        </EntrysContainer>
    </Table>
  )
}
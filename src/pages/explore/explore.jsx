import React from 'react'
import { FileExplorer } from '../../components/explore/fileExplorer/fileExplorer.jsx'
import { Details } from '../../components/explore/details/details.jsx'

//styled components
import {
    Parent,
    Separator, 
} from './style.js'

export const Explore = () => {
  return (
    <Parent>
      <FileExplorer/>
      <Separator></Separator>
      <Details/>
    </Parent>
  )
}

import React, {useContext} from 'react'
import { DownloadContext } from '../../../context/downloadContext.js'

export const DownloadProgress = () => {
  const { download } = useContext(DownloadContext)
  return (
    <div>
      <div>
        <p></p>
        <p>download.status</p>
        <p>download.file</p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

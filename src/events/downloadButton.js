
import {config} from '../config.js'

export function showToast(e, setVisible) {
    e.preventDefault();
    setVisible(true);
}

export function hideToast(e, setVisible) {
    e.preventDefault();
    setVisible(false);
}

export async function downloadFile(e, file, setDownloadState) {
  e.preventDefault()

  setDownloadState({
    name: file.name,
    status: 'Please wait', 
    progress: 0,
    downloaded: false
  })

  const { PORT, PROTOCOL, HOSTNAME } = config
  await fetch(`${PROTOCOL}://${HOSTNAME}:${PORT}/${file.url}`) 
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = file.name+file.extension
      link.click()
    })
 
  setDownloadState(null)

}
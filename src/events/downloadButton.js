
import {config} from '../config.js'

export function showToast(e, setVisible) {
    e.preventDefault();
    setVisible(true);
}

export function hideToast(e, setVisible) {
    e.preventDefault();
    setVisible(false);
}

export function downloadFile(e, file) {
  e.preventDefault()

  const { PORT, PROTOCOL, HOSTNAME } = config
  fetch(`${PROTOCOL}://${HOSTNAME}:${PORT}/${file.url}`)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = file.name+'.'+file.extension
      link.click()
    })
}
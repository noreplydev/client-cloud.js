// import {data} from '../data/data.js'
import {
  PORT, 
  PROTOCOL, 
  HOSTNAME,
} from '../config'

export const getData = async () => {
  const data = await fetch(`${PROTOCOL}://${HOSTNAME}:${PORT}/files`)
    .then(json=> json.json()) 
    .then(_data => _data)

  console.log(data)

  data.content.forEach(entry => {
    //for dirs and files
    entry.created_on = dateFormatter(entry.birthday, 'date')
    entry.at = dateFormatter(entry.birthday, 'time')
    
    //only files
    if (!entry.dir) {
      entry.name = entry.name.split('.')[0]
      entry.size = sizeFormatter(entry.size)
    }

    delete entry.birthday
  })

  return data
}


function sizeFormatter(bytes) {
    // converts bytes to human readable format
    const sizes = ['KB', 'MB', 'GB', 'TB']; 

    if (bytes < 1000) return `${bytes} bytes`

    for(let i = 0; i < sizes.length; i++) {
      bytes = bytes / 1024
      if(bytes < 700) return `${bytes.toFixed(1)} ${sizes[i]}`
    }
}

function dateFormatter(timestamp, type) {
    // converts timestamp to human readable format
    const date = new Date(timestamp); 

    if(type === 'date') {
        const day = date.getDate().toString()
        const month = (date.getMonth() + 1).toString()
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    } 

    // for times
    const hour = date.getHours().toString()
    const minutes = date.getMinutes().toString()

    return `${hour}:${minutes}`;
}
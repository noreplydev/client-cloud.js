// import {data} from '../data/data.js'
import {config} from '../config'


// fetch on the first load and on every folder click
export async function fetchData(workspace, updateWorkspace) {
  // fetch the data
  const data = await getData(workspace.segments)

  // set the searchbar path
  const segments = workspace.segments 
  const printablePath = segments.length <= 3 
    ? segments.join('/')
    : ' …/'+segments.slice(segments.length-3, segments.length).join('/')

  // udpate the workspace context to render the folder usage
  updateWorkspace({
    ...workspace,
    currentFile: {
      name: 'No selected file', // clear the current file
      extension: '', 
      url: '-', 
    }, 
    CWD: workspace.segments[workspace.segments.length - 1], // use the last segment or the root directory
    folderUsage: data.folder_usage,
    loading: false, 
    path: printablePath, 
    data: data
  })
}

// call to the server and get the data with the correct format
export const getData = async (segments) => {
  const {PORT, PROTOCOL, HOSTNAME, DIRECTORY_DELIMITER} = config; 
  const url = segments.join(DIRECTORY_DELIMITER)

  const data = await fetch(`${PROTOCOL}://${HOSTNAME}:${PORT}/files/${url}`)
    .then(json=> json.json()) 
    .then(_data => _data)

  console.log(data)

  data.content.forEach(entry => {
    //for dirs and files
    entry.created_on = dateFormatter(entry.birthday, 'date')
    entry.at = dateFormatter(entry.birthday, 'time')
    
    //only files
    if (!entry.dir) {
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
    if(timestamp === '-') return '-' // to handle the .. back directory

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
    return `${hour}:${minutes.length < 2 ? '0'+minutes : minutes}`;
}
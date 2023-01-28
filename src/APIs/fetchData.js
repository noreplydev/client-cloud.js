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

  return data
}
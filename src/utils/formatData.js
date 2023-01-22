import {data} from '../data/data.js'

export const getData = async () => {
    // fetches data from data.js and formats it
    console.log(data); 

    const formattedData = {
      root_directory: data.root_directory, 
      files_count: data.files_count,
      directory_count: data.directory_count,
      content: data.content.map(file => {
        return file.dir 
          ? {
              name: file.name,
              extension: file.extension,
              created_on: file.createdAt,
              at: file.createdAt,
              size: file.size,
              dir: file.dir
            }
          : {
              name: file.name.split('.')[0],
              extension: file.extension,
              created_on: dateFormatter(file.createdAt, 'date'),
              at: dateFormatter(file.createdAt, 'time'),
              size: sizeFormatter(file.size),
              dir: file.dir
            }
      })
    }

    console.log(formattedData)
    return formattedData
}


function sizeFormatter(bytes) {
    // converts bytes to human readable format
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']; 

    let count = 0; 
    while(bytes < 1) {
        bytes = bytes * 1024;
        count++;
    }

    return `${bytes.toFixed(1)} ${sizes[count]}`;
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
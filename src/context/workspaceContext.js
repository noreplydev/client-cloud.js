import React, {useState, createContext} from "react";

export const WorkspaceContext = createContext(); // 

export const WorkspaceProvider = ({children}) => {
  const [workspace, setWorkspace] = useState({
    root: 'files', // fallback directory if the segments are empty
    CWD: '',
    segments: [], 
    currentFile: {
      name: 'No selected file',
      extension: '', 
    }, 
    folderUsage: [], 
    loading: false,
    path: '',
    data: undefined, 
  });

  const updateWorkspace = (newWorkspace) => {
    setWorkspace(newWorkspace);
  }

  return (
    <WorkspaceContext.Provider value={{workspace, updateWorkspace}}>
      {children}
    </WorkspaceContext.Provider>
  )
}
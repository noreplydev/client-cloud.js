import React, {useState, createContext} from "react";

export const WorkspaceContext = createContext(); // 

export const WorkspaceProvider = ({children}) => {
  const [workspace, setWorkspace] = useState({
    root: 'files', 
    CWD: 'files',
    segments: [], 
    currentFile: {
      name: 'No selected file',
    }, 
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
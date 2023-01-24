import React, {useState, createContext} from "react";

export const FileContext = createContext(); // 

export const FileProvider = ({children}) => {
  const [file, setFile] = useState();

  const changeFile = (file) => {
    console.log('file: ', file); 
    setFile(file);
  }

  return (
    <FileContext.Provider value={{file, changeFile}}>
      {children}
    </FileContext.Provider>
  )
}
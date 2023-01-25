export function entryClick(e, file, workspace, updateWorkspace) {
  e.preventDefault()

  if (!file.dir) {
    updateWorkspace({
      ...workspace, 
      currentFile: file
    })
    return
  }

  // if is .. directory pop the last segment otherwise push the new segment
  file.name === '..' ? workspace.segments.pop() : workspace.segments.push(file.name)

  updateWorkspace({
    CWD: file.name, 
    segments: [...workspace.segments], // create a chain of segments
    currentFile: {
      ...file, 
      name: 'No file selected'
    },
  })
}
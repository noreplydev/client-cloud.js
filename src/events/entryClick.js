export function entryClick(e, file, workspace, updateWorkspace) {
  e.preventDefault()

  if (workspace.loading) return // avoid multiple clicks 

  if (!file.dir) {
    updateWorkspace({
      ...workspace, 
      currentFile: file,
      loading: false
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
    loading: true
  })
}
export function entryClick(e, file, workspace, updateWorkspace) {
  e.preventDefault()

  if (workspace.loading) return // avoid multiple clicks 

  // for files, update the current file and return
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
    ...workspace,
    CWD: workspace.segments[workspace.segments.length - 1] || workspace.root, 
    segments: [...workspace.segments], // create a chain of segments
    currentFile: {
      ...file, 
      name: 'No file selected'
    },
    loading: true
  })
}
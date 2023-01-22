
export function showMenu(e, targetFile, setTarget) {
  e.preventDefault();
  const parent = e.target.parentElement


  if (e.target.parentElement.id === "row" && targetFile === null) {
    const name = parent.childNodes[0].innerText
    const extension = parent.childNodes[1].innerText

    if( name !== '..' && extension !== '-' ) {
      setTarget({
        name: name+'.'+extension, 
        x: e.target.offsetLeft + (e.clientX - e.target.offsetLeft), 
        y: e.target.offsetTop + (e.clientY - e.target.offsetTop)
      })
      console.log(e)
      return 
    }
  }

  setTarget(null)
}

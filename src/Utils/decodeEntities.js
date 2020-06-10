function decodeEntities(string) {
  const textarea = document.createElement("textarea")
  textarea.innerHTML = string
  return textarea.value
}

export default decodeEntities

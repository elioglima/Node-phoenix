
module.exports.GetValue = (objeto, tagName) => {
  if (objeto == null) {
    return null
  } else if (objeto[tagName] === "undefined") {
    return null
  }
  
  objeto = objeto[tagName]        
  if (Array.isArray(objeto)) {
    if (objeto.length === 0) {            
      objeto = null
    } else if (objeto.length === 1) {
      objeto = objeto[0]            
    }    
  }
  return objeto
}


module.exports.isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

const Assign = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

module.exports.Assign = (obj) => Assign(obj)

module.exports.Parse = (Value, Modelo) => {
  if (!Array.isArray(Value)) {
    let NewModelo = Assign(Modelo)  
    Object.keys(NewModelo).forEach(v => {
        if (Value[v]) {
          NewModelo[v] = Value[v]
        } 
    })

    return NewModelo
  }

  if (Value.length === 0) return {}
  
  let Modelos = []
  for (let iValue = 0; iValue < Value.length; iValue++) {
    const element = Value[iValue];
    let NewModeloTemp = Assign(Modelo)  
    let bAdd = false 
    
    Object.keys(NewModeloTemp).forEach(v => {
      console.log('ok', v, element[v])
      if (element[v]) {
        NewModeloTemp[v] = element[v]
        if (!bAdd) 
          bAdd = true 
      } 
    })

    if (bAdd) {
      Modelos.push(NewModeloTemp)
    }
  }

  return Modelos
}
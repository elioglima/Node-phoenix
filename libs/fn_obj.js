

module.exports.isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}

module.exports.Assign = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
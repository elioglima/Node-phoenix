
const RemoveJsonTextAttribute = (value,parentElement) => {
    try{
      var keyNo = Object.keys(parentElement._parent).length;
      var keyName = Object.keys(parentElement._parent)[keyNo-1];
      parentElement._parent[keyName] = value;
    } catch(e){

    }
}

module.exports.ToJson = (xml) => {
    var convert = require('xml-js');
    return convert.xml2js(xml, 
        {
            compact: true, 
            spaces: 4,
            trim:true,
            sanitize:false,
            nativeType:false,
            addParent:false,
            alwaysChildren:true,
            instructionHasAttributes:false,
            captureSpacesBetweenElements:false,
            ignoreDeclaration:true,
            ignoreInstruction:true,
            ignoreAttributes:true,
            ignoreComment:true,
            ignoreCdata:true,
            ignoreDoctype:true,
            ignoreText:false,
            textFn: RemoveJsonTextAttribute
        });    
}
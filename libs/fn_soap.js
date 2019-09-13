'use strict';

module.exports.PreparaXml = (body) => {
    let xml = " <soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:tem='http://tempuri.org/'>"
    xml += " <soapenv:Header/>"
    xml += "<soapenv:Body>"
    xml += body	
    xml += "</soapenv:Body>"
    xml += "</soapenv:Envelope>"
    return xml
}; 
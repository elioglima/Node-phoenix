module.exports.isEmpty = obj => {
    return Object.keys(obj).length === 0;
};

const Assign = obj => {
    return JSON.parse(JSON.stringify(obj));
};

module.exports.Assign = obj => Assign(obj);

const FindFieldToValue = (FieldFind, Obj) => {
    Obj = JSON.parse(JSON.stringify(Obj));
    const ValueObj = Object.keys(Obj);
    for (let iObj = 0; iObj < ValueObj.length; iObj++) {
        const Field = ValueObj[iObj];
        if (Field.toLowerCase() == FieldFind.toLowerCase()) {
            return Obj[Field];
        }
    }
};

module.exports.FindFieldToValue = (FieldFind, Obj) =>
    FindFieldToValue(FieldFind, Obj);

module.exports.Parse = (Value, Modelo) => {
    if (!Array.isArray(Value)) {
        let NewModelo = Assign(Modelo);
        Object.keys(NewModelo).forEach(v => {
            if (FindFieldToValue(v, Value)) {
                NewModelo[v] = FindFieldToValue(v, Value);
            }
        });

        return NewModelo;
    }

    if (Value.length === 0) return;

    let Modelos = [];
    for (let iValue = 0; iValue < Value.length; iValue++) {
        const element = Value[iValue];
        let NewModeloTemp = Assign(Modelo);
        let bAdd = false;

        Object.keys(NewModeloTemp).forEach(v => {
            if (FindFieldToValue(v, element)) {
                NewModeloTemp[v] = FindFieldToValue(v, element);
                if (!bAdd) bAdd = true;
            }
        });

        if (bAdd) {
            Modelos.push(NewModeloTemp);
        }
    }

    return Modelos;
};

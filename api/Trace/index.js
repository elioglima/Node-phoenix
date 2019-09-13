const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    
    COLHE TEMPO E DETALHES DE EXECUÇÃO DE ROTAS E FUNÇÕES

*/

let TraceAPISchema = new Schema({
    Instance: { type: String, required: true },
    TimeRun: { type: Number },
    Routes: { type: Array }
}, { collection: 'TraceAPI' });


let TraceAPI = mongoose.model('TraceAPI', TraceAPISchema);

let Trace = (function () {    
    "use strict";

    const Trace = function (input1, input2) {
        
        if (typeof new.target === "undefined") {
            console.log("Constructor must be called with new.");
            return false
        }
        
        this.Enabled = input1
        this.events = {
            Instance: input2,
            TimeRun: 0,
            Routes: []
        }
    }

    Object.defineProperty(Trace.prototype, "Start", {
        value: function (local, value) {

            if (this.Enabled === false) {
                return false
            }

            let dados = {}

            if (!local) {
                console.log('local de log não informado.')
                return false
            }

            dados['local'] = local
            dados['start'] = new Date()
            dados['end'] = ''
            dados['time_run'] = 0
            dados['obj_end'] = {}

            if (value)
                dados['obj_start'] = value

            this.events.Routes.push(dados)
        },
        enumerable: false,
        writable: true,
        configurable: true
    });

    Object.defineProperty(Trace.prototype, "End", {
        value: function (local, value) {
            
            if (this.Enabled === false) {
                return false
            }

            if (!local) {
                console.log('local de log não informado.')
                return false
            }

            for (let iRoutes = 0; iRoutes < this.events.Routes.length; iRoutes++) {
                const Route = this.events.Routes[iRoutes];
                if (Route.local === local) {
                    this.events.Routes[iRoutes].end = new Date()
                    this.events.Routes[iRoutes].time_run = parseInt((this.events.Routes[iRoutes].end - this.events.Routes[iRoutes].start))
                    this.events.Routes[iRoutes].obj_end = value
                    return true
                }
            }

            return false
        },
        enumerable: false,
        writable: true,
        configurable: true
    });


    Object.defineProperty(Trace.prototype, "Save", {
        value: function () {
            
            if (this.Enabled === false) {
                return false
            }

            (async (events) => {

                let time_run = 0
                for (let iRoutes = 0; iRoutes < events.Routes.length; iRoutes++) {
                    time_run += events.Routes[iRoutes].time_run
                }

                events.TimeRun = time_run
                const model = new TraceAPI(events);
                await model.save();
            })(this.events)
        },
        enumerable: false,
        writable: true,
        configurable: true
    });

    return Trace;
}());

module.exports.New = (enabled, name) => {
    return new Trace(enabled, name)
}
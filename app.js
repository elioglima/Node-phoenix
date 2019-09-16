require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const cluster = require('cluster');
const os = require('os');
const cpus = config.maxWorkers || os.cpus().length;
const api = require('./api');
const Logger = require('logplease');
const logger = Logger.create('log');
const db = require('./db');

Object.defineProperty(global, '__stack', {
  get: function () {
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) {
      return stack;
    };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

Object.defineProperty(global, '__line', {
  get: function () {
    return __stack[1].getLineNumber();
  }
});

Object.defineProperty(global, '__function', {
  get: function () {
    return __stack[1].getFunctionName();
  }
});

if (cluster.isMaster) {
  for (var i = 0; i < cpus; i++) {
    const worker = cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });

} else {

  let app = express();
  global.logger = logger
  app.use(cors())
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  app.use(bodyParser.raw({ inflate: true, limit: '100mb', type: '*/*' }))

  app.use((err, req, res, next) => {
    if (err) {
      let mensage = err.type
      if (err.type === 'entity.parse.failed') { mensage = 'Json inválido' }
      res.send({
        statusCode: err.statusCode,
        type: err.type,
        mensage: mensage
      })
      return
    }
    next()
  })

  app.get('/', function (req, res) {
    res.send({ App: config.app.title })
  })

  app.use('/api', api)  
  db.start();

  app.listen(config.port, () => {
    global.logger.info(`api up on port ${config.port}`)
  });
}
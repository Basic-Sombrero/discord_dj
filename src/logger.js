const { info } = require('winston');
const winston = require('winston');

const logger = winston.createLogger({
    level: info,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.timestamp()
    ),
    defaultMeta: { service: 'user-service'},
    transports: [
        new winston.transports.Console(
            {
                level: 'info', 
            })
    ]
})

module.exports = logger;
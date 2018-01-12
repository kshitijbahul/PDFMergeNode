import {transports,Logger} from 'winston';

export const logger = new (Logger)({
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'pdfMerge.log' })
      ],
      exceptionHandlers: [
        new transports.File({ filename: 'exceptions.log' })
      ]
});
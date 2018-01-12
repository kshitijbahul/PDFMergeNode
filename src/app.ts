'use strict';

import * as express from 'express';
import * as pdfMerge from 'easy-pdf-merge';
import {logger} from './logger';
import * as _ from 'lodash';
import * as path from 'path';

let app = express();
app.listen('3010',()=>{logger.info('Express is up')})
app.use(express.json());
app.post('/mergePDF',(req,res)=>{
    logger.info('Came here in the end point',req.body);
    
    let files=_.forEach(req.body.inputFiles,(eachFile,key)=>{
        logger.info(key,eachFile); 
        req.body.inputFiles[key]=`${path.join(req.body.inputPath,eachFile)}.pdf`
    });
    logger.info('The Filenames are',files);
    logger.info('The Filenames are',req.body.inputFiles);
    
    pdfMerge(req.body.inputFiles,`${path.join(req.body.inputPath,req.body.outputFile)}.pdf`,(err)=>{
        if (err) return logger.error(err) ;
        return logger.info(`Successfully written to ${req.body.outputFile}`)
    })
    res.send('Got you ');
});



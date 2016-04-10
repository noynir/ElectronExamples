'use strict';

const fs = require('fs');
const request = require('request');

function download(uri, filename, callback){
  
    let promise=new Promise(function(resolve,reject){
        request.head(uri, function(err, res, body){
            console.log('content-type:', res.headers['content-type']);
            console.log('content-length:', res.headers['content-length']);

            request(uri)
                .pipe(fs.createWriteStream(filename))
                .on('close', function(){
                    resolve(filename);
                });
        });
    });

    return promise;
 
};


module.exports=download;

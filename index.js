/**
 * Created by govind on 9/1/19.
 */
"use strict";
const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 10, checkperiod: 10 } );
module.exports  = (request,reply) =>{

    let value = myCache.get( request.auth.credentials.contID+"_"+request.path );

    if ( value == undefined ){

        let obj = { "reqCount": 1 };

        //cacheName will be unique for each user

        let cacheName = request.auth.credentials.contID+"_"+request.path;
        myCache.set( cacheName, obj, function( err, success ){
            if( !err && success ){
                reply({message:'Request is valid'});
            }
        });
    }else{
        if(value.reqCount >1){
            reply({message:'Request limit excedded',appcode:50005}).code(429).takeover();
        }else{
            value.reqCount+=1;
            let cacheName = request.auth.credentials.contID+"_"+request.path;
            myCache.set( cacheName, value, function( err, success ){
                if( !err && success ){
                    reply(success)
                }
            });
        }

    }

};
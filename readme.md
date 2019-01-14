#This is an example I am trying to publish node npm modulw

This module expect two input 
1) request.auth.credentials.contID

2) request.path

## How to use request limiter in your route
##### const req-handeler = require('request-limiter-example-code-req-limiter'); 

`````{
            method: 'POST',
            path: '/api/path/',
            config: {
                handler: function(){},
                auth: {
                    strategy: 'jwt'
                },
                pre: [{method: req-handeler}]
            }

        },
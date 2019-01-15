## Request limiter

#### Dependency
1) Hapi Js
2) JWT Auth

## How to use request limiter in your route

##### const req-handeler = require('request-limiter-example-code-req-limiter'); 

`````javascript
{
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
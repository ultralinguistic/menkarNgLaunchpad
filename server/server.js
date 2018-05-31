// includes
let express = require( 'express' );
let app = express()
// globals
let port = 5000 || process.env.PORT;
//uses
app.use( express.static( 'server/public' ) );
//server up
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); //end server up
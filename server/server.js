// includes
let express = require( 'express' );
let app = express();
let bodyParser = require('body-parser');
let movieRouter = require('./routers/movie.router')
// globals
let port = 5000 || process.env.PORT;
//uses
app.use( express.static( 'server/public' ) );
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use ('/movie', movieRouter);
//server up
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); //end server up


const express = require('express');
const PORT = 3000;
const app = express();
const db = require('./config')
//setup view engine
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('assets'));

//importing routes
const router = require('./routes');
app.use('/',router);

//Listening on port 3000
app.listen(PORT, function(err){
    if(err) {
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`Listening on port ${PORT}`);
    }
});

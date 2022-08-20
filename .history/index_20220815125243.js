const express = require('express');
const PORT = 3000;
const app = express();

//setup view engine
app.set('view engine', 'ejs');
app.

//Listening on port 3000
app.listen(PORT, function(err){
    if(err) {
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`Listening on port ${PORT}`);
    }
});

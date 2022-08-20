const express = require('express');
const PORT = 3000;
const app = express();

app.listen(PORT, function(err){
    if(err) {

    }
    else{
        console.log(`Listening on port ${PORT}`);
    }
});

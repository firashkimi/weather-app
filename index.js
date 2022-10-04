const express = require('express')
const app = express()
const PORT =4000
const weatherRoute = require('./routes/weather');
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/',weatherRoute);

app.listen(PORT,()=>{
    console.log(`server runnig at port ${4000}`);
})

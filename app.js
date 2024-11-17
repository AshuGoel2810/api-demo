const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/products");
app.use('/api/products', product_routes);

app.get('/', (req, res) => {
    res.send("he this is my first page");
});


const start = async () => {
    try { app.listen(PORT, () =>{
        console.log( `connected with ${PORT}`);
    }) } 
    catch (error)
     {console.log(error); }
}

start();
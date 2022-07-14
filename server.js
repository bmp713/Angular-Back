require("dotenv").config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");
const fs = require('fs');

const port = process.env.PORT || 4000; 
const app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => { 
    console.log('Server listening on port', port) 
});

// GET request
app.get("/", (req, res) => {
    console.log("req.body =>", req.body);
    let data = true;

    res.send(data);
});

// Read products 
app.get("/read", async (req, res) => {
    console.log("req.body =>", req.body);

    fs.readFile('./products.json', 'utf8', (err, data) => {
        if(err) console.error(err);

        res.send(data);
    });
}); 

// Read product by id 
app.get("/read/:id", async (req, res) => {
    console.log("req.body =>", req.body);

    fs.readFile('./products.json', 'utf8', (err, data) => {
        if(err) console.error(err);

        data = JSON.parse(data);

        let product = data.find( item => {
            return item.id === req.params.id;
        });

        res.send( product );
    });
}); 

// Update product
app.post("/update/:id", async (req, res) => {
    console.log("POST req.body =>", req.body);

    fs.readFile('./products.json', 'utf8', (err, data) => {
        if(err) console.error(err);

        data = JSON.parse(data);

        let product = data.find( item => {
            return item.id === req.params.id;
        });

        product.name = req.body.name;
        product.type = req.body.type;
        product.color = req.body.color;
        product.price = req.body.price;
        product.description = req.body.description;

        fs.writeFileSync('./products.json', JSON.stringify(data), err => {
           if(err) console.error(err);
        });
        
        res.send( data );
    });
}); 


// Delete product by id
app.delete("/delete/:id", async (req, res) => {
    
    fs.readFile('./products.json', 'utf8', (err, data) => {
        if(err) console.error(err);

        data = JSON.parse(data);

        data = data.filter( item => {
            return item.id !== req.params.id;
        });

        fs.writeFileSync('./products.json', JSON.stringify(data), err => {
           if(err) console.error(err);
        });        
    });
    res.send();
}); 




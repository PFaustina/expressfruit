const express = require('express');
const app = express();
const fruits = require('./models/fruits.js')//import fruits
const veggies = require('./models/veggies.js')//import veggies


//setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//index
app.get('/fruits', (req, res) => {
    res.render('Index',{
        fruits: fruits
    });
});

app.get('/veggies', (req, res) => {
    res.render('veggies/Index',{
        veggies: veggies
    });
});

//show
app.get('/fruits/:index', (req, res) => {
     res.render('Show', { //second param must be an object
        fruits: fruits[req.params.index] 
        //there will be a variable available inside the ejs file called fruit, 
        //its value is fruits[req.params.indexOfFruitsArray]
    
    });
}); 

//show
app.get('/veggies/:index', (req, res) => {
     res.render('veggies/Show', { //second param must be an object
        veggies: veggies[req.params.index] 

    });
}); 

app.listen(3000, () => {
    console.log('listening');
});
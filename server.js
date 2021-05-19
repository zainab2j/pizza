const express = require('express');
const app = express()
const  ejs = require('ejs')
const expresslayout = require('express-ejs-layouts')
const path = require('path')

// const mongoose = require('mongoose');
// const ShortUrl = require('./models/ShortURL');




const PORT= process.env.PORT || 3000


app.get('/', (req, res) => {
 res.render('home')
})

// set template engine
app.use(expresslayout)
app.set('views', path.join(__dirname, '/resources/views') )
app.set('view engine', 'ejs')



app.listen(PORT, ()=>{
	console.log('listening on port 330')
})


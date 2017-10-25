const express = require('express');
const hbs = require ('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname +'/views/partials')

app.set('viewi engine','hbs');

app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
	var now = new Date().toString();
	console.log (`${now}: ${req.method} ${req.url}`)


	next();


});


hbs.registerHelper('getCurrentYear',() =>{
	return new Date().getFullYear()

});

hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();


});

app.get('/',(req,res)=>{
	
//res.send('<h1>Hello Express!</h1>');


	res.render('home.hbs',{
		pageTitle:'Home Page',
		welcomeMessage:'Welcome to my website',
		currentYear: new Date().getFullYear()
	});

});


app.get ('/about',(req, res)=>{

//	res.send('About Page');

	res.render('about.hbs', {
		pageTitle:'About Page',
		welcomeMessage:'Vai Curintia',
		currentYear: new Date().getFullYear()});

});

app.get ('/projects',(req,res)=>{
	res.render('projects.hbs',{
		pageTitle:'Projects'
	
	
	});


});

// bad - send back json with errorMenssage

app.get ('/bad',(req,res)=>{

	res.send({
		errosMessage: 'Unabe to handle request'
	});

});


app.listen(port, () => {
	console.log(`Server is up on port ${port}`);


});





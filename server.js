var express =require('express');
var bodyParser =require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');

var apps = express();

mongoose.connect(config.database,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('database connected');
	}
});

apps.use(bodyParser.urlencoded({extended:true}));
apps.use(bodyParser.json());
apps.use(morgan('dev'));

apps.use(express.static(__dirname +'/public'));

var api = require('./app/routes/api')(apps,express);
apps.use('/api',api);

apps.get('*', function(req,res){
	res.sendFile(__dirname + '/public/views/index.html');
})

apps.listen(config.port,function(err){
	if(err){
		console.log(err);
	} else{
		console.log("Listening on port 3000");
	}
});
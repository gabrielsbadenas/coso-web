const express = require('express'),
app = express(),
options = {
	port: 8080,
	ip: "localhost"
}

app.use(express.static('public'))

app.get('/', function(req,res){
	res.redirect('/coso/index.html')
})

app.listen(options.port, options.ip, () => {
	console.log(`Server running at http://${options.ip}:${options.port}/`)
})

/*Define dependencies.*/

var express=require("express");
var multer  = require('multer');
var fs = require('fs');
var app=express();
var done=false;

/*Configure the multer.*/

app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

/*Handling routes.*/

app.get('/',function(req,res){
      res.sendfile("index.html");
});

app.post('/api/photo',function(req,res){
  if(done==true){
    console.log(req.files);
    fs.readFile(req.files.userPhoto.path, function (err, data) {
 	if (err) {
	 console.log(err)
	} else {
		
  	console.log(data.toString('base64'));
	fs.unlinkSync(req.files.userPhoto.path);
	}

	}); 
    res.end();
  }
});

/*Run the server.*/
app.listen(3000,function(){
    console.log("Working on port 3000");
});

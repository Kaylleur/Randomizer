var fs = require('fs');
var max = 99999;
var min = 10000;


fs.readdir("./", function(err,files){
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var oldName = file;
        if(err) console.error(err);
        if(file.match(/^.*\.mp3$/)){
            random = Math.floor(Math.random()*(max-min+1)+min);
            if(file.match(/^[0-9]{5}_(.*).mp3$/)){
                file = file.substr(6);
            }
            file = random + "_" + file;
            fs.renameSync("./" + oldName,"./" + file);
        }
	}
});
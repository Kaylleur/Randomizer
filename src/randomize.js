var fs = require('fs');
var max = 99999;
var min = 10000;
var format = "mp3";
var folder = "./";

fs.readdir(folder, function(err,files){
    for (var i = 0; i < files.length; i++) {
        var filename = files[i];
        var oldFilename = filename;
        var random = Math.floor(Math.random() * (max - min + 1) + min);

        if(err) {
            console.error(err);
            return;
        }
        var reg = new RegExp("^.*\\." + format + "$");
        if(filename.match(reg)){
            if(filename.match(/^[0-9]{5}_(.*).mp3$/)){
                filename = filename.substr(6);
            }
            filename = random + "_" + filename;
            fs.renameSync(folder + oldFilename,folder + filename);
        }
	}
});
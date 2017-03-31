const fs = require('fs');
// default values
let parameters = {
    n : 5,
    format : "mp3",
    path : "./"
};

parseArgs(process.argv);

let path = (parameters.p || parameters.path);
let format = (parameters.f || parameters.format);

let limits = getLimit(parameters.n);

if(!process.argv.includes("--help") && !process.argv.includes("-h") ){
    console.info("Starting process...");
    let numberOfFiles = 0;
    fs.readdir(path, (err, files) => {
        console.info("Reading directories...");
        for (let i = 0; i < files.length; i++) {
            let filename = files[i];
            let oldFilename = filename;
            let random = Math.floor(Math.random() * (limits.max - limits.min + 1) + limits.min);

            if(err) {
                console.error(err);
                return;
            }

            let reg = new RegExp("^.*\\." + format + "$");
            if(filename.match(reg)){
                numberOfFiles++;
                let regFormat = new RegExp("^[0-9]{" + parameters.n + "}_(.*)\." + format + "$");
                if(filename.match(regFormat)){
                    filename = filename.substr(6);
                }
                filename = random + "_" + filename;
                fs.renameSync(path + oldFilename,path + filename);
            }
        }
        console.info("Process terminated. " + numberOfFiles + " files updated.");
    });
}else{
    //display help
    console.log("Randomizer help description");
    console.log("Usage randomize OPTIONS\n");
    console.log("Options : \n");
    console.log("-n VALUE\t number of digit (default : 5)\n\t\t Default random number will be between 99999 and 10000\n");
    console.log("-p/-path VALUE\t set up folder path where randomize (default current folder)");
    console.log("-f/-format VALUE\t the format of files will be randomized (default 'mp3')\n");
    console.log("Example : ");
    console.log("randomize -n 3 -path /path/to/folder -format wav");
}


function parseArgs(args){
    let authorizedArgs = ["-n","-path","-p","-format","-f"];
    //args[0] and args[1] are bin and filename
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if(authorizedArgs.includes(arg)){
            i++;
            arg = arg.substr(1);
            parameters[arg] = args[i];
        }
    }
}

function getLimit(numberOfDigit){
    let max = "9", min = "1";
    for (let i = 1; i < numberOfDigit; i++) {
        max += "9";
        min += "0";
    }
    return {
        max : parseInt(max),
        min : parseInt(min)
    };
}
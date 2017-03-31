**Randomizer**
Npm link : (waiting)

Little utils to randomize folder files.
 
 Prerequisites :
 <pre>
 - nodejs 
 </pre>
 
 No dependency
 
 Install :
 <pre>
 npm install -g randomizer
 </pre>
 
 Usage : 
 <pre>
 //Display help
 randomize -h
 randomize --help
 
 //Exec
 randomize
 randomize -n 10
 randomize -format wav
 randomize -path /path/to/folder
 randomize -format mp4 -path /path/to/folder -n 6
 </pre>
 
 Options :
 - -p / -path : folder where update file (default current)
 - -f / -format : format of files to randomize (default mp3)
 - -n : number of digit for randomize (default 5 so between 99999 - 10000)
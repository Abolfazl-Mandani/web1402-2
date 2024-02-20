let fs = require('fs');

function copy_err(err){
    if(err){
        console.log("File not copied", err);
    }
    else{
    console.log("File Copied");
    }
}

fs.copyFile(process.argv[2],process.argv[3], copy_err);

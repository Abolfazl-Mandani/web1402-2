let fs = require('fs');
function rmdir() {
    fs.rmdir(process.argv[2], message_err2);
}
function message_err2(){
    if(err){
        console.log("Folder not deleted", err);
    }
    else{
    console.log("Folder Deleted");
    }
}
function message_err(err) {
    if(err){
        if (err.code === "EPERM") {
            rmdir();
        }
        else {
            console.log("file not deleted", err);
        }
    }
    else {
        console.log("File Deleted");
    }

}
fs.unlink(process.argv[2], message_err);

let fs = require('fs');
function create_err(err){
    if(err){
        console.log("file not saved" ,err);
    }
    else{
        console.log("file saved");
    }
    
}
function append_err(err){
    if(err){
        console.log("file not appended" ,err);
    }
    else{
        console.log("file appended");
    }
}
function rmdir() {
    fs.rmdir(process.argv[2], Folder_err);
}
function Folder_err(){
    if(err){
        console.log("Folder not deleted", err);
    }
    else{
    console.log("Folder Deleted");
    }
}
function delete_err(err) {
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
function copy_err(err){
    if(err){
        console.log("File not copied", err);
    }
    else{
    console.log("File Copied");
    }
}
switch(process.argv[2]){
    case "create":
        fs.writeFile(process.argv[3],process.argv[4],create_err);
        break;
    case "append":
        fs.appendFile(process.argv[3],process.argv[4],append_err);
        break;
        case "delete":
            fs.unlink(process.argv[3], delete_err);
            break;  
    case "copy":
        fs.copyFile(process.argv[3],process.argv[4], copy_err);
        break;
}


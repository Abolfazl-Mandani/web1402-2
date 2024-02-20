let fs=require('fs');
function message_err(err){
    if(err){
        console.log("file not deleted" ,err);
    }
    else{
        console.log("file deleted");
    }
    
}
fs.unlink(process.argv[2],message_err);

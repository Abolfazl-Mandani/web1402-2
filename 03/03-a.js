let fs=require('fs');
function message_err(err){
    if(err){
        console.log("file not saved" ,err);
    }
    else{
        console.log("file saved");
    }
    
}
fs.writeFile(process.argv[2],process.argv[3],message_err);


let fs = require('fs');
let command = process.argv[2];
let name = process.argv[3];
let arg4 = process.argv[4];

function Callback(err) {
    if(err){
        console.log('ERR: ', err);
    }
    else{
        console.log( command,'successfull.');
    }
}

function unlinkCallback(err) {
    if(err){
        if(err.code === 'EPERM'){
            fs.rmdir(name, rmdirCallback); 
        }
        else{
            console.log('ERR: ', err)
        }
    }
    else{
        console.log("unlink  successfull.")
    }
}

let commands = {
    create: function(){
        fs.writeFile(name, arg4, Callback);
    },
    append: function(){
        fs.appendFile(name, arg4, Callback); 
    },
    delete: function(){
        fs.unlink(name, unlinkCallback);
    },
    copy: function(){
        fs.copyFile(name, arg4, Callback);
    }
}

commands[command]();
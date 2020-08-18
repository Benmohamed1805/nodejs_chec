const fs = require('fs')
fs.readFile(process.argv[2],(er,data)=>{
    if(er){
        console.log(er)
    }else{
console.log(data.toString().split('\n').length-1)

    }
})
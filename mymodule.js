
const fs=require('fs')

module.exports= mymodule=(dir,ext,cb)=>{
    
    fs.readdir(dir,function (err, data) {
          if (err) { return cb(err) } else {
 

 
          return cb(null,data.filter(el=>el.endsWith(`.${ext}`)))
          }
        })
     

}
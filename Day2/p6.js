const fs = require('fs');

fs.rmdir("mydir",(e)=>{
    if(e){
        console.error(e);
        return;
    }
    console.log("Directory deleted successfully");

})
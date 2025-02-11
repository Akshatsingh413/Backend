const fs = require('fs');
const newdata = "I am appended at the end of th file";

fs.appendFile("./data.txt",newdata,(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("Data appended successfully");
    }
})
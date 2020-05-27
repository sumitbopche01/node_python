const express = require('express');
const app = express();

//Create server and run it on port 3020
app.listen(3020, () => {
    console.log('Server running on port 3020');
});

//route for invoking python script
app.get('/name', printName);

function printName(req,res){
     // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    var spawn = require("child_process").spawn; 

    var process = spawn('python', ["./python_script.py", "sumit", "bopche"]);

    //Listen for data event and send those in response 
    process.stdout.on('data', (data) => {
        return res.send(data.toString());
    })
}
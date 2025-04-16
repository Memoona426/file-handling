const fs = require ('fs')
console.log("Current directory:", process.cwd());
// write file
const datatowrite = {
    "lipStick": {"quantity":5,"price":4000} ,
    "eyeliner": {"quantity":4,"price":6000},
    "blushon":{"quantity":6,"price":3000},
    "facepower":{"quantity":3,"price":1000},
    "foundation":{"quantity":1,"price":9000}

}
const makeupboxjson = JSON.stringify(datatowrite,null ,2 )
fs.writeFile("./makeupbox.json",makeupboxjson,"utf8", (err) => {
    if (err) {
        console.log ("error" ,err);
    } else{
        
        console.log ("file written successfully");
    }
});

// read file
fs.readFile("./makeupbox.json" , "utf-8" , (err , result)=> {
    if (err) {
        console.log ("error" ,err);
    } else{
        const data= JSON.parse(result)
        console.log (data);
    }
});
//  const result = fs.readFileSync("C:\\Users\\l\\Desktop\\node js\\contacts.txt" , "utf-8" )
//  console.log (result);
 

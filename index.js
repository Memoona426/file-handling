const fs = require ('fs')
console.log("Current directory:", process.cwd());
// write file

fs.writeFile("./test.txt","hello world", (err) => {});

// read file
fs.readFile("./contacts.txt" , "utf-8" , (err , result)=> {
    if (err) {
        console.log ("error" ,err);
    } else{
        console.log (result);
    }
});
//  const result = fs.readFileSync("C:\\Users\\l\\Desktop\\node js\\contacts.txt" , "utf-8" )
//  console.log (result);
 







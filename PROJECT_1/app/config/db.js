const mongodb=require("mongoose");

const dbConnection=async()=>{
    try{
        const dbConnect= await mongodb.connect(process.env.URI)
        // dbConnect? console.log("db connted"): console.log("db not connect")
        console.log("db connet")
    }
    catch(err){
        console.log("SERVER ERROR",err);
    }
}
module.exports=dbConnection;


// app.js or wherever you want to use it
// require("dotenv").config(); // load env vars
// const sendMail = require("./mailService");

// (async () => {
//   try {
//     await sendMail({
//       to: "recipient@example.com",
//       subject: "Test Email",
//       text: "This is a plain text message",
//       html: "<b>This is a bold HTML message</b>",
//     });
//   } catch (err) {
//     console.error("Mail failed:", err);
//   }
// })();
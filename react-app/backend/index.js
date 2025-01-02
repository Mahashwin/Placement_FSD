var express =require("express")
var app = express()
const port =3002

app.get("/",(req,res)=>{
    res.send("Welcome Mathav Ramalingam")
})
app.get("/json",(req,res)=>{
    res.send("Hii this is JSON")
})
app.get("/static",(req,res)=>{
    res.sendFile('D:/full stack development/react-app/backend/index.html')
})
app.listen(port,()=>{
    console.log(`Sever Started URL:http://localhost:${port}`);
})
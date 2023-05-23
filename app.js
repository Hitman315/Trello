const express=require("express")
const https=require("https")
const app=express()
app.use(express.static("public"))

const url = 'https://api.getform.io/v1/forms/198afb05-caf9-49b3-abae-ea66a4f45d69?token=avPIVeOTM2w7VoxMSBvS889BEpLT13ezzjnlsd1xr9wiJUjuPZR7mGC8fjLN';

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/data",(req,res)=>{
    https.get(url,(response)=>{
        

        response.on("data",(data)=>{
            const weatherData=JSON.parse(data);
            const temp=weatherData.data.submissions;
           
            res.write( JSON.stringify(temp) );
            res.send();
        });
    })
  
})



app.listen(5000,()=>{
    console.log("Successfully connected")
})




//HTML Form: http://localhost:5000/form
//Data: http://localhost:5000/data
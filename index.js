const express=require('express')
const app=express();

app.use(express.json())//middleware

app.use((req,res,next)=>{

})

app.get('/api/：name',(req,res)=>{
    const {name}=req.params
    const {title}=req.query
    res.send(':name'+name+' ?title=xxx '+title)
})

app.post('/api/student',(req,res)=>{
    res.send(req.body)

})

app.listen(3000,()=>{
    console.log(`success!`)
})
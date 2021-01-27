const express=require('express')
const path=require('path')



const logger=require('./middleware/logger')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Basic url
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World</h1>')
// })

// looking for file name
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

//making a folder staic
// app.use(express.static(path.join(__dirname,'public')))

app.use('/api/members',require('./routes/api/members'))


app.use(logger)



const PORT =process.env.PORT||5000;

app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)})
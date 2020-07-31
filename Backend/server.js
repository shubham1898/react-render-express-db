const express=require('express')
const cors = require('cors');

const mongoose=require('mongoose')

const dotenv=require('dotenv')

dotenv.config()
const app=express()
const port=process.env.PORT || 5000
app.use(cors());
app.use(express.json())

const uri=process.env.Db_URI;
mongoose.connect( uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology:true}).then(()=>{
    console.log('database connected')
}).catch(e=>{
    console.log(e)
})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const CreateFormRouter=require('./routes/createform')
// const examRouter=require('./routes/exam')

app.use('/CreateForm', CreateFormRouter)
// app.use('/exam',examRouter)


app.listen(port,()=>{
    console.log('server Live')
})
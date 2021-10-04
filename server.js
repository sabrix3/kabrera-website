const express = require("express")
const connectDB = require('./config/connectDB')
const authRouter = require('./Routes/Auth')
const app = express()
connectDB()


//middleware
app.use(express.json())

// Routes
app.use("/api/video", require("./Routes/Video"))
app.use("/api/user",authRouter)

const PORT = process.env.PORT || 6000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


app.listen(PORT,(err)=>{
    err? console.log(err)
    :console.log(`server is running on port ${PORT}`)

}
)


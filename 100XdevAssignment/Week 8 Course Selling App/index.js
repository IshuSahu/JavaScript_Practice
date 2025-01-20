const express = require('express')
const ConnectDB = require('./config/db')
const userRoutes = require('./router/user');
const adminRoutes = require('./router/admin');
const errorHandler = require('./middleware/errorhandler')

const app = express()

ConnectDB();
app.use(express.json())

app.use('/user/v1',userRoutes)
app.use('/admin/v1',adminRoutes)
app.use(errorHandler)

app.listen(3000,()=>{
    console.log(`server is running on : http://localhost:3000/`);
})
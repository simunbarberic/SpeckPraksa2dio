const express = require('express')
const app = express();
const cors = require("cors");
const db = require('./models')

app.use(express.json());
app.use(cors());

const userRouter = require('./routes/Users');
app.use('/users', userRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("Server is running on port 3001");
    });
})
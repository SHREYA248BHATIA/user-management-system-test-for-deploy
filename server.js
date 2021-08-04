const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const app=express();
const connectDB=require('./server/database/connection');
const path=require('path');
dotenv.config({path:'config.env'});
// const PORT=process.env.PORT||80;
// log requests
app.use(morgan('tiny'));
//mongodb connection
connectDB();
//parse request to body parser
app.use(bodyParser.urlencoded({extended:true}));
//set view engine
app.set('view engine','ejs');
//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
// load routers
app.use('/',require('./server/routes/router')); //importing route from router.js file

app.listen( 3000 || process.env.PORT ,()=>{
    console.log(`Server is running on port-http://localhost:${ 3000 || process.env.PORT}`);
});

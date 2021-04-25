import express from 'express'
import dotnev from 'dotenv'
import cors from 'cors'
dotnev.config()

import router from './router'

console.log(process.env.GITHUB_SECRET_ID);
console.log(process.env.GITHUB_CLIENT_ID);

const app=express();
app.use(cors({origin:'http://localhost:8080'}))


app.use(router)

const PORT=process.env.PORT || 3000
app.listen(PORT,_=>console.log(`Working on ${PORT}`))

//https://github.com/login/oauth/authorize?client_id=920d5e030080def6ed7c
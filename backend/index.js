import express from "express";
import DB from './config/db.js'
import dotenv from 'dotenv'
import Routes from './CRoutes/Routes.js'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())
app.use('/myapp',Routes);
dotenv.config()

const port=process.env.PORT
const DB_URL=process.env.URL


DB(DB_URL)
app.listen(port, () => {
  console.log(`server is up : ${port}`)
});

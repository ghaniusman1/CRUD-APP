import express  from "express";
import {  getAllCruds, createCrud,getdellCrud,singleUser ,getallupdate} from '../Controllers/crudController.js'


const Router=express.Router()
Router.get('/getall',getAllCruds)
Router.post("/create",createCrud)
Router.delete("/getdell/:id",getdellCrud)
Router.get('/singleuser/:id' ,singleUser )

Router.put("/getupdate/:id",getallupdate)

export default Router
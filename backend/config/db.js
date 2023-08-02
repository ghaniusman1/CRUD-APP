import mongoose from "mongoose";
 const DB= async (DB_URL)=>{
    try {
        await mongoose.connect(DB_URL)
        console.log("DB IS UP");
    } catch (error) {
        console.log(error,'err');
    }
 }
 export default DB
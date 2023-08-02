import model from "../CRUDmodel/model.js";

export const createCrud = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const { first_name, last_name, email, password } = req.body;
    const user = await model.findOne({ email: email });
    if (user) {
      res.send({
        status: "failed",
        message: "email already exists",
      });
    } else {
      await model.create(req.body);
      res.send({
        status: "success",
        message: "successfully info saved in db",
      });
    }
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};
export const getAllCruds = async (req, res) => {
  const allCruds = await model.find();
  res.send({
    status: "success",
    allCruds,
  });
};
  export const getdellCrud=async (req,res)=>{

    // const  User=await model.findOne({id:id})
    // if(User)
    // {
    //   await model.findBy({ id: req.body.id });
    //   res.send({ message: "user deleted" });
    // }
    // else{
    //   res.send({ message: "user not found" });

    // }





    await model.findByIdAndDelete(req.params.id)
    res.send({
      status:"success"
    })
  }



  
   export const  getallupdate=async(req,res)=>{
    const id = req.params.id
    try{
    await model.findByIdAndUpdate(id , req.body)
  }
  catch(e){
      console.error(e.message)

  }
  
   }

   


   export const  singleUser=async(req,res)=>{
    
             const id = req.params.id
             const user = await model.findById(id)
             
            
            res.send({user})

  }  
const { UserModel, validUser } = require('../models/users')
const { add,update,deletee,get} = require('../Service/users')


exports.addUser = (req, res) => {

  try {
    add(req.body, res)
  } catch (error) {
    console.error(error);
  }

}

exports.updateUser = async (req, res) => {

  try {
    update(req.params, req.body, res)
  } catch (error) {
    console.error(error);
  }
};

exports.deleteUser=async(req,res)=>{
  try{
    deletee (req.params,res)
  }catch(error){
    console.error(error);
  }
}



exports.getUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
    get(req.params,res)
    }
   catch (error) {
    console.error( error);
    
  }
};
















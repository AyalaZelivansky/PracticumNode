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
  const userId=req.params.userId;
  console.log(userId);
  try{
   var deleteUser = await deletee (userId);
   if (!deleteUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ message: 'User deleted successfully' });
  }catch(error){


    console.error(error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
}

exports.getUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
      var findUser=await get(userId);
      if (!findUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(findUser);
    }
   catch (error) {
    console.error('Failed to get user:', error);
    res.status(500).json({ message: 'Failed to get user' });
    
  }
};
















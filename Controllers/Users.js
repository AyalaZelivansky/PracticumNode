const  {validUser} = require('../models/users')
const { addUser,update,deletee,get} = require('../Service/users')


exports.addUser =async (req, res) => {
  try {

    const { errorV } = validUser(req.body);

    if (errorV) {
      return res.status(400).json({ message: errorV.details });
    }
    var users=await addUser(req.body)
    return res.status(200).json({ status: 200, data: users, message: "Succesfully" });

  } catch (error) {
    console.error(error);
     res.status(500).json({ message: 'internal server error' });

  }

}


exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const { name, email, phone } = req.body;

  try {
    const { error } = validUser(req.body);

    if (error) {
      return res.status(400).json({ message: error.details });
    }
  
    var users = await update(userId,req.body)
    return res.status(200).json({ status: 200, data: users, message: "Succesfully" });
  } catch (error) {
  
    return res.status(400).json({ status: 400, message: error.message });

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
















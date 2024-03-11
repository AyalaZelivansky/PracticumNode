const { UserModel, validUser } = require('../models/users')

exports.deletee= async (userId) => { 
 try {
    var deletedUser = await UserModel.findOneAndDelete({userId: userId});
   return deletedUser
    
    
  } catch (error) {
    console.error('Failed to delete user:', error);
   
  }
};

exports.get = async (userId) => {

  try {
    var findUser = await UserModel.findOne({ userId:userId });
    return findUser;
  } catch (error) {
    console.error('Failed to get user ,services:', error);
    
  }
};


exports.add = async (reqBody,res) => {

    try {
      const { error } = validUser(reqBody);
  
      if (error) {
        return res.status(400).json({ message: error.details });
      }
      await UserModel.create(reqBody);
  
      res.json({ message: 'Added user successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'internal server error' });
    }
  
  }

  exports.update = async (reqParams,reqBody, res) => {
    const { userId } = reqParams;
    console.log(userId);
    const { name, email, phone } = reqBody;
  
    try {
        const { error } = validUser(reqBody);
  
        if (error) {
          return res.status(400).json({ message: error.details });
        }
      const updatedUser = await UserModel.findOneAndUpdate(
        { userId: userId }, 
        { name, email, phone },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Failed to update user:', error);
      res.status(500).json({ message: 'Failed to update user' });
    }
  };


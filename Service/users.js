const { UserModel, validUser } = require('../models/users')

exports.deletee= async (reqParams, res) => {
  const userId = reqParams.userId;
  console.log(userId);
  try {
    const deletedUser = await UserModel.findOneAndDelete({userId: userId});
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
    
  } catch (error) {
    console.error('Failed to delete user:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

exports.get = async (reqParams, res) => {
  const userId  = reqParams.userId;

  try {
    const findUser = await UserModel.findOne({ userId:userId });
    if (!findUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(findUser);
  } catch (error) {
    console.error('Failed to get user:', error);
    res.status(500).json({ message: 'Failed to get user' });
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


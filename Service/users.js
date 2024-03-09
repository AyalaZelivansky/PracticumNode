

const { UserModel, validUser } = require('../models/users')


exports.addUser = async (req, res) => {

  try {
    const { error } = validUser(req.body);

    if (error) {
      return res.status(400).json({ message: error.details });
    }
    await UserModel.create(req.body);

    res.json({ message: 'משתמש נוסף בהצלחה' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'שגיאת שרת פנימית' });
  }

}

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const { name, email,phone } = req.body;

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { userId: userId }, // עדכון לפי שדה userId
      { name, email ,phone},
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



exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;
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

exports.getUserById = async (req, res) => {
  const userId  = req.params.userId;

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
=======
const { UserModel, validUser } = require('../models/users')


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


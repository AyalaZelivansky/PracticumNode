
const { UserModel, validUser } = require('../models/users')
const { add, update } = require('../Service/users')


exports.addUser = (req, res) => {

  try {
    add(req.body, res)
  } catch (error) {
    console.error(error);
  }

}

// exports.updateUser = async (req, res) => {
//   const { userId } = req.params;
//   console.log(userId);
//   const { name, email, phone } = req.body;

//   try {
//     const updatedUser = await UserModel.findOneAndUpdate(
//       { userId: userId }, // עדכון לפי שדה userId
//       { name, email, phone },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json(updatedUser);
//   } catch (error) {
//     console.error('Failed to update user:', error);
//     res.status(500).json({ message: 'Failed to update user' });
//   }
// };

exports.updateUser = async (req, res) => {

  try {
    update(req.params, req.body, res)
  } catch (error) {
    console.error(error);
  }
};



exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const deletedUser = await UserModel.findOneAndDelete({ userId: userId });
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
  const userId = req.params.userId;

  try {
    const findUser = await UserModel.findOne({ userId: userId });
    if (!findUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(findUser);
  } catch (error) {
    console.error('Failed to get user:', error);
    res.status(500).json({ message: 'Failed to get user' });
  }
};
















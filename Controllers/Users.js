
const { UserModel, validUser } = require('../models/users')


const userList = [{
  email: "ddr@sdf",
  name: "sari",
  phone: "0526164311",
  userId: 1
},
{
  email: "dfghdr@sdf",
  name: "ayala",
  phone: "0526164311",
  userId: 2
},
{
  email: "ddr@sgjhjdf",
  name: "aaa",
  phone: "0526562626",
  userId: 3
}
]




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
  const userId = req.params
  console.log(userId);
  try {
    const deletedUser = userList.findIndex(x => x.userId === userId)
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    userList.splice(deletedUser, 1)

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Failed to delete user:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};








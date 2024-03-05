
const { User, validUser } = require('../models/users')

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
  const valid = validUser(req.body)
  if (valid.error) {
    return res.status(400).json(valid.error.details)
  }

  userList.push(req.body);
  res.json({ message: 'User added successfully' })
  res.send(userList)

}

exports.updateUser = async (req, res) => {
  const userId = req.params;
  const { name, email, phone } = req.body;

  try {
    const updatedUser = userList.findIndex(x => x.userId === userId)
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });

    }
    userList[updatedUser].name = name;
    userList[updatedUser].email = email;
    userList[updatedUser].phone = phone;

    res.send(userList)
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








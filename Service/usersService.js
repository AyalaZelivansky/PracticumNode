const { UserModel, validUser } = require('../models/users')


exports.add = async (reqBody) => {

  try {

    var users=await UserModel.create(reqBody);
    return users;

  } catch (error) {
    console.error(error);
  }

}

exports.update = async (userId, reqBody) => {

  const { name, email, phone } = reqBody;

  try {
   
    const updatedUser = await UserModel.findOneAndUpdate(
      { userId: userId },
      { name, email, phone },
      { new: true }
    );

    return updatedUser;
  
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};
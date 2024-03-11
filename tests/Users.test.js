const {addUser,deleteUser}= require('../Controllers/Users')
const { UserModel}=require('../models/users')
const mongoose = require('mongoose');






// const { expect } = require('usersdb');
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true, unique: true },
// });
// const User = mongoose.model('User', userSchema);
// describe('בדיקת מחיקת צומת Mongoose', () => {
//   before(async () => {
//     await mongoose.connect('mongodb://localhost:27017/usersdb');
//   });
//   after(async () => {
//     await mongoose.disconnect();
//   });
//   beforeEach(async () => {
//     await User.deleteMany({});
//   });
//   it('צריך למחוק משתמש לפי שם ומספר טלפון', async () => {
//     const testUser = new User({ name: 'John Doe', phone: '123-456-7890' });
//     await testUser.save();
//     const userCountBefore = await User.countDocuments();
//     const deletedUser = await User.findOneAndDelete({
//       name: 'John Doe',
//       phone: '123-456-7890',
//     });
//     const userCountAfter = await User.countDocuments();
//     expect(deletedUser).to.be.a('object');
//     expect(deletedUser.name).to.equal('John Doe');
//     expect(deletedUser.phone).to.equal('123-456-7890');
//     expect(userCountAfter).to.be.lessThan(userCountBefore);
//   });
// });
const {addUser}= require('../controllers/Users')
const { UserModel}=require('../models/users')

jest.mock('../models/users',()=>{
  addUser:jest.fn()
});
test('adds user successfully and returns appropriate response', async () => {
    const mockUser = { name: 'John Doe', email: 'john.doe@example.com',phone:'0556703919', };
    const req = { body: mockUser };
    const res = { status: jest.fn().mockReturnThis() };
  
    addUser.create.mockResolvedValue(mockUser); // Mock successful creation
  
    await addUser(req, res);
  
    expect(res.json).toHaveBeenCalledWith({ message: 'Added user successfully' });
    expect(addUser.create).toHaveBeenCalledWith(mockUser); // Assert data passed
  });
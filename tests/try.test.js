const {addUser}= require('../controllers/Users')
const { UserModel}=require('../models/users')

jest.mock('../models/users');
test('adds user successfully and returns appropriate response', async () => {
    const mockUser = { name: 'John Doe', email: 'john.doe@example.com' };
    const req = { body: mockUser };
    const res = { json: jest.fn() };
  
    UserModel.create.mockResolvedValue(mockUser); // Mock successful creation
  
    await addUser(req, res);
  
    expect(res.json).toHaveBeenCalledWith({ message: 'Added user successfully' });
    expect(UserModel.create).toHaveBeenCalledWith(mockUser); // Assert data passed
  });
  
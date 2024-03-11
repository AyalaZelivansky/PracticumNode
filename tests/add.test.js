const { addUser } = require('../Controllers/Users')
const add = require('../Service/users')


jest.mock('../Service/users', () => ({
    addUser: jest.fn()
}));

describe('Cerate user function', () => {
    it('should handle creating new user', async () => {
        const req = { body: { name: "ayala", email: "john.doe@example.com", userId: "5" } }
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn(),json: jest.fn() }
        add.addUser.mockResolvedValue(req.body);
        await addUser(req, res);

        expect(add.addUser).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({status: 200, data: req.body, message: "Succesfully"});
    });

    it(' errors while creating new user', async () => {
        const req = { body: { userId: "777", name: 'Jg', email: 'Jhon@example' } }
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() ,json: jest.fn()}
        const erorr = 'internal server error';
        add.addUser.mockRejectedValue(new Error(erorr));
        add.addUser.mockRejectedValue(req.body);

        await addUser(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'internal server error'});

    });

})
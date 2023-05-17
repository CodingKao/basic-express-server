const validator = require('../middleware/validator');

describe('validator middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { query: {} };
    res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    next = jest.fn();
  });

  it('should pass the request to the next middleware when name property is present', () => {
    req.query.name = 'John';

    validator(req, res, next);

    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should send a 500 response when name property is missing', () => {
    validator(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Name is missing');
    expect(next).not.toHaveBeenCalled();
  });
});
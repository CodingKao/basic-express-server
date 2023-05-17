const logger = require('../middleware/logger');

describe('logger middleware', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log the request method and path', () => {
    const req = { method: 'GET', path: '/person' };
    const res = {};
    const next = jest.fn();

    logger(req, res, next);

    expect(consoleLogSpy).toHaveBeenCalledWith('GET /person');
    expect(next).toHaveBeenCalledTimes(1);
  });
});
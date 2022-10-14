import { capitalize } from './strings';

describe('Capitalize:', () => {
  it('should capitalize a string', () => {
    expect(capitalize('name')).toEqual('Name');
  });
});

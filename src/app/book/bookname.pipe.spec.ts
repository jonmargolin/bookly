import { BooknamePipe } from './bookname.pipe';

describe('BooknamePipe', () => {
  it('create an instance', () => {
    const pipe = new BooknamePipe();
    expect(pipe).toBeTruthy();
  });
});

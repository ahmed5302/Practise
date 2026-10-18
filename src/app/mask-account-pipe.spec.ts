import { MaskAccountPipe } from './mask-account-pipe';

describe('MaskAccountPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskAccountPipe();
    expect(pipe).toBeTruthy();
  });
});

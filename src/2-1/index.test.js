import { expect } from 'chai';
import { run, setup } from './index.js';

describe('day 2, challenge 1', () => {
  it('first test case', () => {
    const program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
    const output = run(program);
    expect(output).to.eql([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
  });

  it('second test case', () => {
    const program = [1, 0, 0, 0, 99];
    const output = run(program);
    expect(output).to.eql([2, 0, 0, 0, 99]);
  });

  it('third test case', () => {
    const program = [2, 3, 0, 3, 99];
    const output = run(program);
    expect(output).to.eql([2, 3, 0, 6, 99]);
  });

  it('fourth test case', () => {
    const program = [2, 4, 4, 5, 99, 0];
    const output = run(program);
    expect(output).to.eql([2, 4, 4, 5, 99, 9801]);
  });

  it('fifth test case', () => {
    const program = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    const output = run(program);
    expect(output).to.eql([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });

  it('sets up the program correctly', () => {
    // replace position 1 with the value 12 and replace position 2 with the value 2
    const program = [1, 0, 0, 0, 99];
    const output = setup(program, 12, 2);
    expect(output).to.eql([1, 12, 2, 0, 99]);
  });
});

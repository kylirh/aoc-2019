import { expect } from 'chai';
import { calculateFinalAnswer } from './index.js';

describe('day 2, challenge 1', () => {
  it('calculates the final answer correctly', () => {
    const noun = 12;
    const verb = 2;
    const output = calculateFinalAnswer(noun, verb);
    expect(output).to.eql(1202);
  });
});

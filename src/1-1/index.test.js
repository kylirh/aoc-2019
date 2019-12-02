import { expect } from 'chai';
import hello from './index.js';

describe('hello function', () => {
  it('creates a greeting', () => {
    const greeting = hello('Kylir Horton');
    expect(greeting).to.equal('Hello Kylir Horton');
  });
});

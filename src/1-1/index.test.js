import { expect } from 'chai';
import { getFuelNeeded } from './index.js';

describe('day 1, challenge 1', () => {
  it('calculates needed fuel correctly', () => {
    let fuelNeeded = getFuelNeeded(12);
    expect(fuelNeeded).to.equal(2);

    fuelNeeded = getFuelNeeded(14);
    expect(fuelNeeded).to.equal(2);

    fuelNeeded = getFuelNeeded(1969);
    expect(fuelNeeded).to.equal(654);

    fuelNeeded = getFuelNeeded(100756);
    expect(fuelNeeded).to.equal(33583);
  });
});

export const getFuelNeeded = (mass) => {
  return Math.floor(mass / 3) - 2;
};

export default (data) => {
  return data
    .split(/[\r\n]+/)
    .map((x) => getFuelNeeded(parseInt(x, 10)))
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};

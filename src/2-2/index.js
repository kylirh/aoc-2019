import { run, setup } from '../2-1/index.js';

export const calculateFinalAnswer = (noun, verb) => {
  return 100 * noun + verb;
};

export default (data) => {
  const input = data.split(',').map((x) => parseInt(x, 10));

  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const program = setup(input, noun, verb);
      const output = run(program);
      if (output[0] === 19690720) {
        return calculateFinalAnswer(noun, verb);
      }
    }
  }

  return 'Cannot determine input pairs!';
};

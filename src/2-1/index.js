export const run = (input) => {
  const ADD = 1;
  const MULTIPLY = 2;
  const STOP = 99;

  const program = [...input];
  let position = 0;
  let opcode = program[position];

  while (opcode !== STOP && position < program.length) {
    const a = program[program[position + 1]];
    const b = program[program[position + 2]];
    const dest = program[position + 3];

    switch (opcode) {
      case ADD:
        program[dest] = a + b;
        break;

      case MULTIPLY:
        program[dest] = a * b;
        break;
    }

    position += 4;
    opcode = program[position];
  }

  return program;
};

export const setup = (input) => {
  const program = [...input];
  program[1] = 12;
  program[2] = 2;
  return program;
};

export default (data) => {
  const program = data.split(',').map(parseInt(x, 10));
};

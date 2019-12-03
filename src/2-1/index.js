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

export const setup = (input, noun, verb) => {
  const program = [...input];
  program[1] = noun;
  program[2] = verb;
  return program;
};

export default (data) => {
  const input = data.split(',').map((x) => parseInt(x, 10));
  const program = setup(input, 12, 2);
  const output = run(program);
  return output[0];
};

import { execa } from 'execa';

export const getDiff = async () => {
  const { stdout } = await execa('git', ['diff', 'main', '--patch']);
  return stdout;
};

// 1. get git diff of current branch compare to main
// 2. pass the diff to the LLM
// 3. let the LLM recognize the typos
// 4. render the report

import { getDiff } from './diff';
import { getTypos } from './LLM';
import { renderReport } from './report';

async function main() {
  const diff = await getDiff();
  const typos = await getTypos(diff);
  await renderReport(typos);
}

main();

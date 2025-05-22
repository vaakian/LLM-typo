import fs from 'fs';

/**
 * render report in an html file
 *
 * consists of:
 * - the git diff content
 * - display the diff with typos highlighted
 */
export const renderReport = async ({
  diff,
  typos,
  dest,
}: {
  dest: string;
  diff: string;
  typos: string[];
}) => {
  const html = `
    <html>
      <head>
        <title>Code Review Report</title>
      </head>
      <body>
        <h1>Code Review Report</h1>
        <pre>${diff}</pre>
        <h2>Typos</h2>
        <ul>
          ${typos.map((typo) => `<li>${typo}</li>`).join('')}
        </ul>
      </body>
    </html>
  `;

  fs.writeFileSync(dest, html);
};

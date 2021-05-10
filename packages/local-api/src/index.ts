export const serve =  (port: string, filename: string, dir: string) => {
  console.log(`Serving traffic on port ${port}`);
  console.log(`Saving/fetching file ${filename}`);
  console.log(`That file is on dir: ${dir}`);
}
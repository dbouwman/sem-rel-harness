export function srhFetch(url: string): Promise<string[]> {
  console.log(`srhCommon:srhFetch ${url} woot`);
  return Promise.resolve(['Allen', 'Bob', 'Carl']);
}

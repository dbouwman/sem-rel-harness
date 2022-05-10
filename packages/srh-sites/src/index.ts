import { srhFetch, getPetNames } from 'srh-common';

export function getNames(url: string): Promise<string[]> {
  return srhFetch(url);
}

export function getMoreNames(url: string): Promise<string[]> {
  return Promise.all([srhFetch(url), srhFetch(url)]).then(([a, b]) => {
    return [...a, ...b];
  });
}

export function getCatNames(): string[] {
  return getPetNames().slice(3);
}

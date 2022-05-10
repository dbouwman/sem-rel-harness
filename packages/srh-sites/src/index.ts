import { srhFetch } from 'srh-common';

export function getNames(url: string): Promise<string[]> {
  return srhFetch(url);
}

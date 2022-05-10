export function srhFetch(url: string): Promise<string[]> {
  console.log(`srhCommon:srhFetch ${url} woot`);
  return Promise.resolve(['Allen', 'Bob', 'Carl', 'Amy', 'Barbra', 'Christy']);
}

export function addEmotion(phrase: string, emote: string) {
  return `${phrase} with ${emote}!!`;
}

export function getGeezerNames(): string[] {
  return ['Ollie', 'Milo', 'Mr Maize', 'Cheddar', 'Farley'];
}

export function cook(item: 'cake' | 'steak'): string {
  return `I have cooked you a delicious ${item}.`;
}

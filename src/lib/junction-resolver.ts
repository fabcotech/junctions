import { NameRecord } from './types';

export function resolveJunction(junction: string): NameRecord[] {
  // const pa parse(string);

  return [
    { name: junction, type: 'TXT', data: 'HASH=abddef' },
    { name: junction, type: 'A', data: '127.0.0.1' },
  ];
}

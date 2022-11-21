import { NameRecord } from 'types';

export function resolveJunction(junction: string): NameRecord[] {
  return [
    { name: junction, type: 'TXT', data: 'HASH=abddef' },
    { name: junction, type: 'A', data: '127.0.0.1' },
  ];
}

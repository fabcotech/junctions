import { JunctionRecords } from 'lib/types';

export interface DomainResolver {
  canResolve(domain: string): boolean;
  resolve(domain: string): Promise<JunctionRecords>;
}

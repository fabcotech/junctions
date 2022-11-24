import { JunctionError, JunctionRecords, Result } from 'lib/types';

export interface DomainResolver {
  canResolve(domain: string): boolean;
  resolve(domain: string): Promise<Result<JunctionRecords, JunctionError>>;
  config?: Record<string, any>;
}

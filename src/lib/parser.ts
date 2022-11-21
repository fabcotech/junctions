import { DomainResolver } from './domainResolvers';

export function parse(resolvers: DomainResolver[], junction: string) {
  return [
    {
      junction,
      resolver: resolvers[0],
    },
  ];
}

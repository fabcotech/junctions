import { DappyNetworkId, lookup } from '@fabcotech/dappy-lookup';
import { DomainResolver } from './domainResolver';

export const createDappyResolver = (
  dappyLookup: typeof lookup,
  dappyNetwork: DappyNetworkId
): DomainResolver => {
  return {
    resolve: async (domain: string) => {
      const network = [
        {
          hostname: 'localhost',
          ip: '127.0.0.1',
          port: '3002',
          scheme: 'https' as 'https',
          caCert:
            'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN6akNDQWJhZ0F3SUJBZ0lVZmdNd3VSbWtpNWhNRU9pWUs5ZjlTQnpIQWJFd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZERVNNQkFHQTFVRUF3d0piRzlqWVd4b2IzTjBNQjRYRFRJeU1EUXlPREE0TkRjek1Wb1hEVFF5TURReQpNekE0TkRjek1Wb3dGREVTTUJBR0ExVUVBd3dKYkc5allXeG9iM04wTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGCkFBT0NBUThBTUlJQkNnS0NBUUVBclpralFabThLdU5uakJjTkhBb01BMlBEakxYbXR1UTlXSFBxTy9QbzJCbVYKQklDZU9OdStzd1BSbDRkVHhCZzc4RENtcy8rSGRxVUczZnhrM3dsSDhMd2dVQmlwVm1Rb1N6bVpTMENsK2J4OApRTHNNa2QzamxqVVp6QzJIYllQdHpDK29KMmVRQ2wzNlZDeENnWUY2Q1dsNkFkSytiT1ZJSjdheDRYZFdCUHFnCmc2UUlYYzFRWC9lN2Y1NyszMk9KLzl2VXVmQ3FuVDJKTWNCMzAwOVNRblFBZm9XaGxDaXBuTXJXU2hSeENPVGgKdDhCbDFxZElpMVp4UXNMK3dXUDI5RTVyMThBcm5aSnZsdEtHNXpGbnp1QmtpVWxtdnFMYjU1NlU4OGhXYkJ0Ugo0ck4vWFpsTklZQkdqS2JaUmxrZUZldk1taG8zMXpwbUdiMDNicUhHN1FJREFRQUJveGd3RmpBVUJnTlZIUkVFCkRUQUxnZ2xzYjJOaGJHaHZjM1F3RFFZSktvWklodmNOQVFFTEJRQURnZ0VCQUswNC9NUXMybnU1ZlNyaXBlSDQKQ2d1eWUvalRBNUhtdlRPZU9pcmg5ZzRYTXV3bzNwQkliWjVGZ21oV1dQdm9zTUhmcVpaQkcxSGxCWnlwZk9pTgpkU09qOEduOE1kZ0Rmb1BHdFY1bVJTd0JyV0ppUElJTEtTMGFTZXBINU1BcVJHZnRKampzMWJxa3JaYlJlTkNkClNiTHZwUHNBczlDVUNJZlh4b3oyWG1CVHE2dzNYS05Gck1FVUI2ZmNIS0tXbVUzcG0yT1lqUGxKVmw2UVRoSU8KQ0s5ajhjS3hxQ1hESGRqNW03MzF4bEJRcE1pSnQra3lNWWJPUFZsSnovbXJzNUJJNVlRUmExLzRBRU1ORk4vbQpSK3VlTVhDenczL2FYNmRXQlluRG0vcGwvaGh0V3ZZZUFTZ0Vhd0hZTWhxeUpPUnlUeDZJWERjUGdqL09COEhQCkVadz0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQ==',
        },
      ];
      const rA = await dappyLookup(domain, 'A', {
        dappyNetwork: network,
      });
      return {
        ok: false,
        error: {
          code: 'RESOLVER_ERROR_A_RECORD_NOT_FOUND',
          message: `${domain} record A not found`,
        },
      };

      if (rA.answers.length === 0) {
        return {
          ok: false,
          error: {
            code: 'RESOLVER_ERROR_A_RECORD_NOT_FOUND',
            message: `${domain} record A not found`,
          },
        };
      }

      const rTXT = await dappyLookup(domain, 'TXT', {
        dappyNetwork,
      });

      if (
        rTXT.answers.length === 0 ||
        !rTXT.answers[0].data.startsWith('HASH=')
      ) {
        return {
          ok: false,
          error: {
            code: 'RESOLVER_ERROR_TXT_HASH_RECORD_NOT_FOUND',
            message: `${domain} record TXT(HASH) not found`,
          },
        };
      }
      return {
        ok: true,
        result: [
          {
            type: 'A',
            name: domain,
            data: rA.answers[0].data,
          },
          {
            type: 'TXT',
            name: domain,
            data: rTXT.answers[0].data,
          },
        ],
      };
    },
    canResolve: (domain: string) => {
      return domain.endsWith(`.${dappyNetwork}`);
    },
  };
};

export const dappyGammaResolver = createDappyResolver(lookup, 'gamma');
export const dappyDResolver = createDappyResolver(lookup, 'd');

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BadgeToken,
  BadgeTokenInterface,
} from "../../../contracts/NameSystem.sol/BadgeToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "domain",
        type: "string",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006006553480156200001657600080fd5b5060405162002eed38038062002eed83398181016040528101906200003c9190620001ff565b818181600090816200004f9190620004cf565b508060019081620000619190620004cf565b5050505050620005b6565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000d5826200008a565b810181811067ffffffffffffffff82111715620000f757620000f66200009b565b5b80604052505050565b60006200010c6200006c565b90506200011a8282620000ca565b919050565b600067ffffffffffffffff8211156200013d576200013c6200009b565b5b62000148826200008a565b9050602081019050919050565b60005b838110156200017557808201518184015260208101905062000158565b60008484015250505050565b60006200019862000192846200011f565b62000100565b905082815260208101848484011115620001b757620001b662000085565b5b620001c484828562000155565b509392505050565b600082601f830112620001e457620001e362000080565b5b8151620001f684826020860162000181565b91505092915050565b6000806040838503121562000219576200021862000076565b5b600083015167ffffffffffffffff8111156200023a57620002396200007b565b5b6200024885828601620001cc565b925050602083015167ffffffffffffffff8111156200026c576200026b6200007b565b5b6200027a85828601620001cc565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d757607f821691505b602082108103620002ed57620002ec6200028f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000318565b62000363868362000318565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003b0620003aa620003a4846200037b565b62000385565b6200037b565b9050919050565b6000819050919050565b620003cc836200038f565b620003e4620003db82620003b7565b84845462000325565b825550505050565b600090565b620003fb620003ec565b62000408818484620003c1565b505050565b5b81811015620004305762000424600082620003f1565b6001810190506200040e565b5050565b601f8211156200047f576200044981620002f3565b620004548462000308565b8101602085101562000464578190505b6200047c620004738562000308565b8301826200040d565b50505b505050565b600082821c905092915050565b6000620004a46000198460080262000484565b1980831691505092915050565b6000620004bf838362000491565b9150826002028217905092915050565b620004da8262000284565b67ffffffffffffffff811115620004f657620004f56200009b565b5b620005028254620002be565b6200050f82828562000434565b600060209050601f83116001811462000547576000841562000532578287015190505b6200053e8582620004b1565b865550620005ae565b601f1984166200055786620002f3565b60005b8281101562000581578489015182556001820191506020850194506020810190506200055a565b86831015620005a157848901516200059d601f89168262000491565b8355505b6001600288020188555050505b505050505050565b61292780620005c66000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb4651461025a578063b88d4fde14610276578063c87b56dd14610292578063e985e9c5146102c2576100e9565b80636352211e146101dc57806370a082311461020c57806395d89b411461023c576100e9565b8063081812fc116100c8578063081812fc14610158578063095ea7b31461018857806323b872dd146101a457806342842e0e146101c0576100e9565b806275a317146100ee57806301ffc9a71461010a57806306fdde031461013a575b600080fd5b61010860048036038101906101039190611b10565b6102f2565b005b610124600480360381019061011f9190611bc4565b61041f565b6040516101319190611c0c565b60405180910390f35b610142610501565b60405161014f9190611ca6565b60405180910390f35b610172600480360381019061016d9190611cfe565b610593565b60405161017f9190611d3a565b60405180910390f35b6101a2600480360381019061019d9190611d55565b6105d9565b005b6101be60048036038101906101b99190611d95565b6106f0565b005b6101da60048036038101906101d59190611d95565b610750565b005b6101f660048036038101906101f19190611cfe565b610770565b6040516102039190611d3a565b60405180910390f35b61022660048036038101906102219190611de8565b6107f6565b6040516102339190611e24565b60405180910390f35b6102446108ad565b6040516102519190611ca6565b60405180910390f35b610274600480360381019061026f9190611e6b565b61093f565b005b610290600480360381019061028b9190611f4c565b610955565b005b6102ac60048036038101906102a79190611cfe565b6109b7565b6040516102b99190611ca6565b60405180910390f35b6102dc60048036038101906102d79190611fcf565b610a1f565b6040516102e99190611c0c565b60405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff1660078260405161031a919061204b565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461039f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610396906120ae565b60405180910390fd5b60006103a9610ab3565b90506103b58382610ac9565b6103bd610ce6565b826007836040516103ce919061204b565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104ea57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104fa57506104f982610d00565b5b9050919050565b606060008054610510906120fd565b80601f016020809104026020016040519081016040528092919081815260200182805461053c906120fd565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b5050505050905090565b600061059e82610d6a565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105e482610770565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610654576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064b906121a0565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610673610db5565b73ffffffffffffffffffffffffffffffffffffffff1614806106a257506106a18161069c610db5565b610a1f565b5b6106e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d890612232565b60405180910390fd5b6106eb8383610dbd565b505050565b6107016106fb610db5565b82610e76565b610740576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610737906122c4565b60405180910390fd5b61074b838383610f0b565b505050565b61076b83838360405180602001604052806000815250610955565b505050565b60008061077c83611204565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e490612330565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085d906123c2565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546108bc906120fd565b80601f01602080910402602001604051908101604052809291908181526020018280546108e8906120fd565b80156109355780601f1061090a57610100808354040283529160200191610935565b820191906000526020600020905b81548152906001019060200180831161091857829003601f168201915b5050505050905090565b61095161094a610db5565b8383611241565b5050565b610966610960610db5565b83610e76565b6109a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099c906122c4565b60405180910390fd5b6109b1848484846113ad565b50505050565b60606109c282610d6a565b60006109cc611409565b905060008151116109ec5760405180602001604052806000815250610a17565b806109f684611420565b604051602001610a079291906123e2565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006001600654610ac49190612435565b905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2f906124b5565b60405180910390fd5b610b41816114ee565b15610b81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7890612521565b60405180910390fd5b610b8f60008383600161152f565b610b98816114ee565b15610bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcf90612521565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ce2600083836001611655565b5050565b60066000815480929190610cf990612541565b9190505550565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610d73816114ee565b610db2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da990612330565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610e3083610770565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610e8283610770565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ec45750610ec38185610a1f565b5b80610f0257508373ffffffffffffffffffffffffffffffffffffffff16610eea84610593565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610f2b82610770565b73ffffffffffffffffffffffffffffffffffffffff1614610f81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f78906125fb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ff0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe79061268d565b60405180910390fd5b610ffd838383600161152f565b8273ffffffffffffffffffffffffffffffffffffffff1661101d82610770565b73ffffffffffffffffffffffffffffffffffffffff1614611073576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106a906125fb565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46111ff8383836001611655565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036112af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a6906126f9565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113a09190611c0c565b60405180910390a3505050565b6113b8848484610f0b565b6113c48484848461165b565b611403576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113fa9061278b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161142f846117e2565b01905060008167ffffffffffffffff81111561144e5761144d6119e5565b5b6040519080825280601f01601f1916602001820160405280156114805781602001600182028036833780820191505090505b509050600082602001820190505b6001156114e3578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816114d7576114d66127ab565b5b0494506000850361148e575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661151083611204565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561164f57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146115c35780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115bb91906127da565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461164e5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116469190612435565b925050819055505b5b50505050565b50505050565b600061167c8473ffffffffffffffffffffffffffffffffffffffff16611935565b156117d5578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116a5610db5565b8786866040518563ffffffff1660e01b81526004016116c79493929190612863565b6020604051808303816000875af192505050801561170357506040513d601f19601f8201168201806040525081019061170091906128c4565b60015b611785573d8060008114611733576040519150601f19603f3d011682016040523d82523d6000602084013e611738565b606091505b50600081510361177d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117749061278b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506117da565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611840577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611836576118356127ab565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061187d576d04ee2d6d415b85acef81000000008381611873576118726127ab565b5b0492506020810190505b662386f26fc1000083106118ac57662386f26fc1000083816118a2576118a16127ab565b5b0492506010810190505b6305f5e10083106118d5576305f5e10083816118cb576118ca6127ab565b5b0492506008810190505b61271083106118fa5761271083816118f0576118ef6127ab565b5b0492506004810190505b6064831061191d5760648381611913576119126127ab565b5b0492506002810190505b600a831061192c576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006119978261196c565b9050919050565b6119a78161198c565b81146119b257600080fd5b50565b6000813590506119c48161199e565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a1d826119d4565b810181811067ffffffffffffffff82111715611a3c57611a3b6119e5565b5b80604052505050565b6000611a4f611958565b9050611a5b8282611a14565b919050565b600067ffffffffffffffff821115611a7b57611a7a6119e5565b5b611a84826119d4565b9050602081019050919050565b82818337600083830152505050565b6000611ab3611aae84611a60565b611a45565b905082815260208101848484011115611acf57611ace6119cf565b5b611ada848285611a91565b509392505050565b600082601f830112611af757611af66119ca565b5b8135611b07848260208601611aa0565b91505092915050565b60008060408385031215611b2757611b26611962565b5b6000611b35858286016119b5565b925050602083013567ffffffffffffffff811115611b5657611b55611967565b5b611b6285828601611ae2565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ba181611b6c565b8114611bac57600080fd5b50565b600081359050611bbe81611b98565b92915050565b600060208284031215611bda57611bd9611962565b5b6000611be884828501611baf565b91505092915050565b60008115159050919050565b611c0681611bf1565b82525050565b6000602082019050611c216000830184611bfd565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611c61578082015181840152602081019050611c46565b60008484015250505050565b6000611c7882611c27565b611c828185611c32565b9350611c92818560208601611c43565b611c9b816119d4565b840191505092915050565b60006020820190508181036000830152611cc08184611c6d565b905092915050565b6000819050919050565b611cdb81611cc8565b8114611ce657600080fd5b50565b600081359050611cf881611cd2565b92915050565b600060208284031215611d1457611d13611962565b5b6000611d2284828501611ce9565b91505092915050565b611d348161198c565b82525050565b6000602082019050611d4f6000830184611d2b565b92915050565b60008060408385031215611d6c57611d6b611962565b5b6000611d7a858286016119b5565b9250506020611d8b85828601611ce9565b9150509250929050565b600080600060608486031215611dae57611dad611962565b5b6000611dbc868287016119b5565b9350506020611dcd868287016119b5565b9250506040611dde86828701611ce9565b9150509250925092565b600060208284031215611dfe57611dfd611962565b5b6000611e0c848285016119b5565b91505092915050565b611e1e81611cc8565b82525050565b6000602082019050611e396000830184611e15565b92915050565b611e4881611bf1565b8114611e5357600080fd5b50565b600081359050611e6581611e3f565b92915050565b60008060408385031215611e8257611e81611962565b5b6000611e90858286016119b5565b9250506020611ea185828601611e56565b9150509250929050565b600067ffffffffffffffff821115611ec657611ec56119e5565b5b611ecf826119d4565b9050602081019050919050565b6000611eef611eea84611eab565b611a45565b905082815260208101848484011115611f0b57611f0a6119cf565b5b611f16848285611a91565b509392505050565b600082601f830112611f3357611f326119ca565b5b8135611f43848260208601611edc565b91505092915050565b60008060008060808587031215611f6657611f65611962565b5b6000611f74878288016119b5565b9450506020611f85878288016119b5565b9350506040611f9687828801611ce9565b925050606085013567ffffffffffffffff811115611fb757611fb6611967565b5b611fc387828801611f1e565b91505092959194509250565b60008060408385031215611fe657611fe5611962565b5b6000611ff4858286016119b5565b9250506020612005858286016119b5565b9150509250929050565b600081905092915050565b600061202582611c27565b61202f818561200f565b935061203f818560208601611c43565b80840191505092915050565b6000612057828461201a565b915081905092915050565b7f446f6d61696e20616c7265616479206578697374730000000000000000000000600082015250565b6000612098601583611c32565b91506120a382612062565b602082019050919050565b600060208201905081810360008301526120c78161208b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061211557607f821691505b602082108103612128576121276120ce565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061218a602183611c32565b91506121958261212e565b604082019050919050565b600060208201905081810360008301526121b98161217d565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061221c603d83611c32565b9150612227826121c0565b604082019050919050565b6000602082019050818103600083015261224b8161220f565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006122ae602d83611c32565b91506122b982612252565b604082019050919050565b600060208201905081810360008301526122dd816122a1565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061231a601883611c32565b9150612325826122e4565b602082019050919050565b600060208201905081810360008301526123498161230d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006123ac602983611c32565b91506123b782612350565b604082019050919050565b600060208201905081810360008301526123db8161239f565b9050919050565b60006123ee828561201a565b91506123fa828461201a565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061244082611cc8565b915061244b83611cc8565b925082820190508082111561246357612462612406565b5b92915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061249f602083611c32565b91506124aa82612469565b602082019050919050565b600060208201905081810360008301526124ce81612492565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061250b601c83611c32565b9150612516826124d5565b602082019050919050565b6000602082019050818103600083015261253a816124fe565b9050919050565b600061254c82611cc8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361257e5761257d612406565b5b600182019050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006125e5602583611c32565b91506125f082612589565b604082019050919050565b60006020820190508181036000830152612614816125d8565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612677602483611c32565b91506126828261261b565b604082019050919050565b600060208201905081810360008301526126a68161266a565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006126e3601983611c32565b91506126ee826126ad565b602082019050919050565b60006020820190508181036000830152612712816126d6565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612775603283611c32565b915061278082612719565b604082019050919050565b600060208201905081810360008301526127a481612768565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006127e582611cc8565b91506127f083611cc8565b925082820390508181111561280857612807612406565b5b92915050565b600081519050919050565b600082825260208201905092915050565b60006128358261280e565b61283f8185612819565b935061284f818560208601611c43565b612858816119d4565b840191505092915050565b60006080820190506128786000830187611d2b565b6128856020830186611d2b565b6128926040830185611e15565b81810360608301526128a4818461282a565b905095945050505050565b6000815190506128be81611b98565b92915050565b6000602082840312156128da576128d9611962565b5b60006128e8848285016128af565b9150509291505056fea2646970667358221220f926f024169da44beabd1a47663ebb38cb233f531a51b9c3f0cd5d05f35f0ac164736f6c63430008110033";

type BadgeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BadgeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BadgeToken__factory extends ContractFactory {
  constructor(...args: BadgeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BadgeToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<BadgeToken>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): BadgeToken {
    return super.attach(address) as BadgeToken;
  }
  override connect(signer: Signer): BadgeToken__factory {
    return super.connect(signer) as BadgeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadgeTokenInterface {
    return new utils.Interface(_abi) as BadgeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadgeToken {
    return new Contract(address, _abi, signerOrProvider) as BadgeToken;
  }
}

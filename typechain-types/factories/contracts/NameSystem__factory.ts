/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NameSystem,
  NameSystemInterface,
} from "../../contracts/NameSystem";

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
        internalType: "string",
        name: "domain",
        type: "string",
      },
    ],
    name: "getRecords",
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
        internalType: "string",
        name: "domain",
        type: "string",
      },
      {
        internalType: "string",
        name: "record",
        type: "string",
      },
    ],
    name: "setRecords",
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
  "0x608060405260006006553480156200001657600080fd5b506040516200359f3803806200359f83398181016040528101906200003c9190620001ff565b818181600090816200004f9190620004cf565b508060019081620000619190620004cf565b5050505050620005b6565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000d5826200008a565b810181811067ffffffffffffffff82111715620000f757620000f66200009b565b5b80604052505050565b60006200010c6200006c565b90506200011a8282620000ca565b919050565b600067ffffffffffffffff8211156200013d576200013c6200009b565b5b62000148826200008a565b9050602081019050919050565b60005b838110156200017557808201518184015260208101905062000158565b60008484015250505050565b60006200019862000192846200011f565b62000100565b905082815260208101848484011115620001b757620001b662000085565b5b620001c484828562000155565b509392505050565b600082601f830112620001e457620001e362000080565b5b8151620001f684826020860162000181565b91505092915050565b6000806040838503121562000219576200021862000076565b5b600083015167ffffffffffffffff8111156200023a57620002396200007b565b5b6200024885828601620001cc565b925050602083015167ffffffffffffffff8111156200026c576200026b6200007b565b5b6200027a85828601620001cc565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d757607f821691505b602082108103620002ed57620002ec6200028f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000318565b62000363868362000318565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003b0620003aa620003a4846200037b565b62000385565b6200037b565b9050919050565b6000819050919050565b620003cc836200038f565b620003e4620003db82620003b7565b84845462000325565b825550505050565b600090565b620003fb620003ec565b62000408818484620003c1565b505050565b5b81811015620004305762000424600082620003f1565b6001810190506200040e565b5050565b601f8211156200047f576200044981620002f3565b620004548462000308565b8101602085101562000464578190505b6200047c620004738562000308565b8301826200040d565b50505b505050565b600082821c905092915050565b6000620004a46000198460080262000484565b1980831691505092915050565b6000620004bf838362000491565b9150826002028217905092915050565b620004da8262000284565b67ffffffffffffffff811115620004f657620004f56200009b565b5b620005028254620002be565b6200050f82828562000434565b600060209050601f83116001811462000547576000841562000532578287015190505b6200053e8582620004b1565b865550620005ae565b601f1984166200055786620002f3565b60005b8281101562000581578489015182556001820191506020850194506020810190506200055a565b86831015620005a157848901516200059d601f89168262000491565b8355505b6001600288020188555050505b505050505050565b612fd980620005c66000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063672cd8b011610097578063a22cb46511610066578063a22cb465146102bc578063b88d4fde146102d8578063c87b56dd146102f4578063e985e9c514610324576100ff565b8063672cd8b01461022257806370a082311461023e57806386e80b711461026e57806395d89b411461029e576100ff565b8063095ea7b3116100d3578063095ea7b31461019e57806323b872dd146101ba57806342842e0e146101d65780636352211e146101f2576100ff565b806275a3171461010457806301ffc9a71461012057806306fdde0314610150578063081812fc1461016e575b600080fd5b61011e60048036038101906101199190611dab565b610354565b005b61013a60048036038101906101359190611e5f565b610481565b6040516101479190611ea7565b60405180910390f35b610158610563565b6040516101659190611f41565b60405180910390f35b61018860048036038101906101839190611f99565b6105f5565b6040516101959190611fd5565b60405180910390f35b6101b860048036038101906101b39190611ff0565b61063b565b005b6101d460048036038101906101cf9190612030565b610752565b005b6101f060048036038101906101eb9190612030565b6107b2565b005b61020c60048036038101906102079190611f99565b6107d2565b6040516102199190611fd5565b60405180910390f35b61023c60048036038101906102379190612083565b610858565b005b610258600480360381019061025391906120fb565b610934565b6040516102659190612137565b60405180910390f35b61028860048036038101906102839190612152565b6109eb565b6040516102959190611f41565b60405180910390f35b6102a6610b48565b6040516102b39190611f41565b60405180910390f35b6102d660048036038101906102d191906121c7565b610bda565b005b6102f260048036038101906102ed91906122a8565b610bf0565b005b61030e60048036038101906103099190611f99565b610c52565b60405161031b9190611f41565b60405180910390f35b61033e6004803603810190610339919061232b565b610cba565b60405161034b9190611ea7565b60405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff1660078260405161037c91906123a7565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610401576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f89061240a565b60405180910390fd5b600061040b610d4e565b90506104178382610d64565b61041f610f81565b8260078360405161043091906123a7565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061054c57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061055c575061055b82610f9b565b5b9050919050565b60606000805461057290612459565b80601f016020809104026020016040519081016040528092919081815260200182805461059e90612459565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b5050505050905090565b600061060082611005565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610646826107d2565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ad906124fc565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106d5611050565b73ffffffffffffffffffffffffffffffffffffffff1614806107045750610703816106fe611050565b610cba565b5b610743576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073a9061258e565b60405180910390fd5b61074d8383611058565b505050565b61076361075d611050565b82611111565b6107a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079990612620565b60405180910390fd5b6107ad8383836111a6565b505050565b6107cd83838360405180602001604052806000815250610bf0565b505050565b6000806107de8361149f565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361084f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108469061268c565b60405180910390fd5b80915050919050565b3373ffffffffffffffffffffffffffffffffffffffff1660078360405161087f91906123a7565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610904576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fb906126f8565b60405180910390fd5b8060088360405161091591906123a7565b9081526020016040518091039020908161092f91906128c4565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099b90612a08565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600073ffffffffffffffffffffffffffffffffffffffff16600783604051610a1591906123a7565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9190612a74565b60405180910390fd5b600882604051610aaa91906123a7565b90815260200160405180910390208054610ac390612459565b80601f0160208091040260200160405190810160405280929190818152602001828054610aef90612459565b8015610b3c5780601f10610b1157610100808354040283529160200191610b3c565b820191906000526020600020905b815481529060010190602001808311610b1f57829003601f168201915b50505050509050919050565b606060018054610b5790612459565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8390612459565b8015610bd05780601f10610ba557610100808354040283529160200191610bd0565b820191906000526020600020905b815481529060010190602001808311610bb357829003601f168201915b5050505050905090565b610bec610be5611050565b83836114dc565b5050565b610c01610bfb611050565b83611111565b610c40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3790612620565b60405180910390fd5b610c4c84848484611648565b50505050565b6060610c5d82611005565b6000610c676116a4565b90506000815111610c875760405180602001604052806000815250610cb2565b80610c91846116bb565b604051602001610ca2929190612a94565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006001600654610d5f9190612ae7565b905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dca90612b67565b60405180910390fd5b610ddc81611789565b15610e1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1390612bd3565b60405180910390fd5b610e2a6000838360016117ca565b610e3381611789565b15610e73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6a90612bd3565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f7d6000838360016118f0565b5050565b60066000815480929190610f9490612bf3565b9190505550565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61100e81611789565b61104d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110449061268c565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166110cb836107d2565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061111d836107d2565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061115f575061115e8185610cba565b5b8061119d57508373ffffffffffffffffffffffffffffffffffffffff16611185846105f5565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166111c6826107d2565b73ffffffffffffffffffffffffffffffffffffffff161461121c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121390612cad565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361128b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128290612d3f565b60405180910390fd5b61129883838360016117ca565b8273ffffffffffffffffffffffffffffffffffffffff166112b8826107d2565b73ffffffffffffffffffffffffffffffffffffffff161461130e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130590612cad565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461149a83838360016118f0565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361154a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154190612dab565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161163b9190611ea7565b60405180910390a3505050565b6116538484846111a6565b61165f848484846118f6565b61169e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169590612e3d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600060016116ca84611a7d565b01905060008167ffffffffffffffff8111156116e9576116e8611c80565b5b6040519080825280601f01601f19166020018201604052801561171b5781602001600182028036833780820191505090505b509050600082602001820190505b60011561177e578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161177257611771612e5d565b5b04945060008503611729575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166117ab8361149f565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60018111156118ea57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461185e5780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118569190612e8c565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146118e95780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118e19190612ae7565b925050819055505b5b50505050565b50505050565b60006119178473ffffffffffffffffffffffffffffffffffffffff16611bd0565b15611a70578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611940611050565b8786866040518563ffffffff1660e01b81526004016119629493929190612f15565b6020604051808303816000875af192505050801561199e57506040513d601f19601f8201168201806040525081019061199b9190612f76565b60015b611a20573d80600081146119ce576040519150601f19603f3d011682016040523d82523d6000602084013e6119d3565b606091505b506000815103611a18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0f90612e3d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a75565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611adb577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611ad157611ad0612e5d565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611b18576d04ee2d6d415b85acef81000000008381611b0e57611b0d612e5d565b5b0492506020810190505b662386f26fc100008310611b4757662386f26fc100008381611b3d57611b3c612e5d565b5b0492506010810190505b6305f5e1008310611b70576305f5e1008381611b6657611b65612e5d565b5b0492506008810190505b6127108310611b95576127108381611b8b57611b8a612e5d565b5b0492506004810190505b60648310611bb85760648381611bae57611bad612e5d565b5b0492506002810190505b600a8310611bc7576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c3282611c07565b9050919050565b611c4281611c27565b8114611c4d57600080fd5b50565b600081359050611c5f81611c39565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611cb882611c6f565b810181811067ffffffffffffffff82111715611cd757611cd6611c80565b5b80604052505050565b6000611cea611bf3565b9050611cf68282611caf565b919050565b600067ffffffffffffffff821115611d1657611d15611c80565b5b611d1f82611c6f565b9050602081019050919050565b82818337600083830152505050565b6000611d4e611d4984611cfb565b611ce0565b905082815260208101848484011115611d6a57611d69611c6a565b5b611d75848285611d2c565b509392505050565b600082601f830112611d9257611d91611c65565b5b8135611da2848260208601611d3b565b91505092915050565b60008060408385031215611dc257611dc1611bfd565b5b6000611dd085828601611c50565b925050602083013567ffffffffffffffff811115611df157611df0611c02565b5b611dfd85828601611d7d565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611e3c81611e07565b8114611e4757600080fd5b50565b600081359050611e5981611e33565b92915050565b600060208284031215611e7557611e74611bfd565b5b6000611e8384828501611e4a565b91505092915050565b60008115159050919050565b611ea181611e8c565b82525050565b6000602082019050611ebc6000830184611e98565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611efc578082015181840152602081019050611ee1565b60008484015250505050565b6000611f1382611ec2565b611f1d8185611ecd565b9350611f2d818560208601611ede565b611f3681611c6f565b840191505092915050565b60006020820190508181036000830152611f5b8184611f08565b905092915050565b6000819050919050565b611f7681611f63565b8114611f8157600080fd5b50565b600081359050611f9381611f6d565b92915050565b600060208284031215611faf57611fae611bfd565b5b6000611fbd84828501611f84565b91505092915050565b611fcf81611c27565b82525050565b6000602082019050611fea6000830184611fc6565b92915050565b6000806040838503121561200757612006611bfd565b5b600061201585828601611c50565b925050602061202685828601611f84565b9150509250929050565b60008060006060848603121561204957612048611bfd565b5b600061205786828701611c50565b935050602061206886828701611c50565b925050604061207986828701611f84565b9150509250925092565b6000806040838503121561209a57612099611bfd565b5b600083013567ffffffffffffffff8111156120b8576120b7611c02565b5b6120c485828601611d7d565b925050602083013567ffffffffffffffff8111156120e5576120e4611c02565b5b6120f185828601611d7d565b9150509250929050565b60006020828403121561211157612110611bfd565b5b600061211f84828501611c50565b91505092915050565b61213181611f63565b82525050565b600060208201905061214c6000830184612128565b92915050565b60006020828403121561216857612167611bfd565b5b600082013567ffffffffffffffff81111561218657612185611c02565b5b61219284828501611d7d565b91505092915050565b6121a481611e8c565b81146121af57600080fd5b50565b6000813590506121c18161219b565b92915050565b600080604083850312156121de576121dd611bfd565b5b60006121ec85828601611c50565b92505060206121fd858286016121b2565b9150509250929050565b600067ffffffffffffffff82111561222257612221611c80565b5b61222b82611c6f565b9050602081019050919050565b600061224b61224684612207565b611ce0565b90508281526020810184848401111561226757612266611c6a565b5b612272848285611d2c565b509392505050565b600082601f83011261228f5761228e611c65565b5b813561229f848260208601612238565b91505092915050565b600080600080608085870312156122c2576122c1611bfd565b5b60006122d087828801611c50565b94505060206122e187828801611c50565b93505060406122f287828801611f84565b925050606085013567ffffffffffffffff81111561231357612312611c02565b5b61231f8782880161227a565b91505092959194509250565b6000806040838503121561234257612341611bfd565b5b600061235085828601611c50565b925050602061236185828601611c50565b9150509250929050565b600081905092915050565b600061238182611ec2565b61238b818561236b565b935061239b818560208601611ede565b80840191505092915050565b60006123b38284612376565b915081905092915050565b7f646f6d61696e20616c7265616479206578697374730000000000000000000000600082015250565b60006123f4601583611ecd565b91506123ff826123be565b602082019050919050565b60006020820190508181036000830152612423816123e7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061247157607f821691505b6020821081036124845761248361242a565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006124e6602183611ecd565b91506124f18261248a565b604082019050919050565b60006020820190508181036000830152612515816124d9565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000612578603d83611ecd565b91506125838261251c565b604082019050919050565b600060208201905081810360008301526125a78161256b565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b600061260a602d83611ecd565b9150612615826125ae565b604082019050919050565b60006020820190508181036000830152612639816125fd565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612676601883611ecd565b915061268182612640565b602082019050919050565b600060208201905081810360008301526126a581612669565b9050919050565b7f4e6f74206f776e6572206f66207468697320646f6d61696e0000000000000000600082015250565b60006126e2601883611ecd565b91506126ed826126ac565b602082019050919050565b60006020820190508181036000830152612711816126d5565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261277a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261273d565b612784868361273d565b95508019841693508086168417925050509392505050565b6000819050919050565b60006127c16127bc6127b784611f63565b61279c565b611f63565b9050919050565b6000819050919050565b6127db836127a6565b6127ef6127e7826127c8565b84845461274a565b825550505050565b600090565b6128046127f7565b61280f8184846127d2565b505050565b5b81811015612833576128286000826127fc565b600181019050612815565b5050565b601f8211156128785761284981612718565b6128528461272d565b81016020851015612861578190505b61287561286d8561272d565b830182612814565b50505b505050565b600082821c905092915050565b600061289b6000198460080261287d565b1980831691505092915050565b60006128b4838361288a565b9150826002028217905092915050565b6128cd82611ec2565b67ffffffffffffffff8111156128e6576128e5611c80565b5b6128f08254612459565b6128fb828285612837565b600060209050601f83116001811461292e576000841561291c578287015190505b61292685826128a8565b86555061298e565b601f19841661293c86612718565b60005b828110156129645784890151825560018201915060208501945060208101905061293f565b86831015612981578489015161297d601f89168261288a565b8355505b6001600288020188555050505b505050505050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006129f2602983611ecd565b91506129fd82612996565b604082019050919050565b60006020820190508181036000830152612a21816129e5565b9050919050565b7f646f6d61696e20646f6573206e6f742065786973740000000000000000000000600082015250565b6000612a5e601583611ecd565b9150612a6982612a28565b602082019050919050565b60006020820190508181036000830152612a8d81612a51565b9050919050565b6000612aa08285612376565b9150612aac8284612376565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612af282611f63565b9150612afd83611f63565b9250828201905080821115612b1557612b14612ab8565b5b92915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612b51602083611ecd565b9150612b5c82612b1b565b602082019050919050565b60006020820190508181036000830152612b8081612b44565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612bbd601c83611ecd565b9150612bc882612b87565b602082019050919050565b60006020820190508181036000830152612bec81612bb0565b9050919050565b6000612bfe82611f63565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612c3057612c2f612ab8565b5b600182019050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612c97602583611ecd565b9150612ca282612c3b565b604082019050919050565b60006020820190508181036000830152612cc681612c8a565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612d29602483611ecd565b9150612d3482612ccd565b604082019050919050565b60006020820190508181036000830152612d5881612d1c565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612d95601983611ecd565b9150612da082612d5f565b602082019050919050565b60006020820190508181036000830152612dc481612d88565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612e27603283611ecd565b9150612e3282612dcb565b604082019050919050565b60006020820190508181036000830152612e5681612e1a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612e9782611f63565b9150612ea283611f63565b9250828203905081811115612eba57612eb9612ab8565b5b92915050565b600081519050919050565b600082825260208201905092915050565b6000612ee782612ec0565b612ef18185612ecb565b9350612f01818560208601611ede565b612f0a81611c6f565b840191505092915050565b6000608082019050612f2a6000830187611fc6565b612f376020830186611fc6565b612f446040830185612128565b8181036060830152612f568184612edc565b905095945050505050565b600081519050612f7081611e33565b92915050565b600060208284031215612f8c57612f8b611bfd565b5b6000612f9a84828501612f61565b9150509291505056fea264697066735822122031fde965ed1dd548ce0fa059957209439b817b210b4b52ce2e608f62a3da722d64736f6c63430008110033";

type NameSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NameSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NameSystem__factory extends ContractFactory {
  constructor(...args: NameSystemConstructorParams) {
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
  ): Promise<NameSystem> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<NameSystem>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): NameSystem {
    return super.attach(address) as NameSystem;
  }
  override connect(signer: Signer): NameSystem__factory {
    return super.connect(signer) as NameSystem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NameSystemInterface {
    return new utils.Interface(_abi) as NameSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NameSystem {
    return new Contract(address, _abi, signerOrProvider) as NameSystem;
  }
}
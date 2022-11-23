// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// A simple smart contract
contract NameSystem is ERC721 {
    uint256 private _currentTokenId = 0;//Token ID here will start from 1

    // Mapping from token ID to owner address
    mapping(string => address) private _domains;
    mapping(string => string) private _records;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
    }

    /**
     * @dev calculates the next token ID based on value of _currentTokenId
     * @return uint256 for the next token ID
     */
    function _getNextTokenId() private view returns (uint256) {
        return _currentTokenId+1;
    }

    /**
     * @dev increments the value of _currentTokenId
     */
    function _incrementTokenId() private {
        _currentTokenId++;
    }
    
    /**
     * @dev Mints a token to an address with a tokenURI.
     * @param _to address of the future owner of the token
     */
    function mintTo(address _to, string memory domain, string memory zone) public {
        require(_domains[domain] == address(0), "domain already exists");
        uint256 newTokenId = _getNextTokenId();
        _mint(_to, newTokenId);
        _incrementTokenId();
        _domains[domain] = _to;
        _records[domain] = zone;
    }

    function getRecords(string memory domain) public view returns(string memory) {
        require(_domains[domain] != address(0), "domain does not exist");
        return _records[domain];
    }
}
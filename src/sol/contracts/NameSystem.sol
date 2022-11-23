// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// A simple smart contract
contract NameSystem {
    string message = "Hello World";
    
    function getMessage() public view returns(string memory) {
        return message;
    }

    
    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
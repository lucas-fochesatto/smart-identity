// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

modifier onlyOwner {
    require(admins[msg.sender] == true, "You are not an admin!");
    _;
}

modifier personRegistred(address _wallet) {
    require(idChain[_wallet].cpf != 0, "This person is not registred!");
    _;
}
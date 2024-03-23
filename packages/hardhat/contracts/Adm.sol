// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./Structs.sol";
import "./Modifiers.sol";

contract IDChain {
    
    mapping(address => bool) admins;

    mapping(address => Person) idChain;

    mapping(Digital => address) digitalChain;

    function addPerson(address _wallet, string memory name, uint256 cpf, uint256 id, address maeWallet, address paiWallet) public view onlyOwner {
        idChain[_wallet] = Person(name, cpf, id, maeWallet, paiWallet);
    }

    function getPersonByWallet(address _wallet) public view onlyOwner personRegistred(_wallet) returns(Person memory person){
        return idChain[_wallet];
    }

    function addAdmin(address _wallet) public view onlyOwner personRegistred(_wallet) {
        admins[_wallet] = true;
    }

    function editName(address _wallet, string memory _newName) public view onlyOwner personRegistred(_wallet) {
        idChain[_wallet].name = _name;
    }
}
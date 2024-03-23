// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Database {
    address[] admins;

    struct Person {
        string name;
        uint256 cpf;
    }

    mapping(address => Person) database;

    function addPerson(address _wallet, string memory name, uint256 cpf) public {
        Person memory _person = Person(name, cpf); 
        database[_wallet] = _person;
    }

    function getPersonByWallet(address _wallet) public view returns(Person memory){
        return database[_wallet];
    }
}
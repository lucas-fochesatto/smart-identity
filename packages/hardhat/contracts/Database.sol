// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Database {

    struct Person {
        string name;            // 0
        uint256 cpf;            // 1
        uint256 id;             // 2
        address mae;            // 3
        address pai;            // 4
        string dataNascimento;  // 5
        string naturalidade;    // 6
        string nacionalidade;   // 7
        string sexo;            // 8 
        uint256 matricula;      // 9
        string nomeMae;         // 10
        string nomePai;         // 
    }

    struct Digital {
        uint256 digital;
    }

    modifier onlyAdmin {
        require(admins[msg.sender] == true, "You are not an admin!");
        _;
    }

    constructor() {
        admins[msg.sender] = true;
    }
    
    mapping(address => bool) public admins;

    mapping(address => Person) public idChain;

    mapping(uint256 => address) public digitalChain;

    mapping(address => address) public childMomChain;

    mapping(address => address) public childDadChain;

    function addAdmin(address _wallet) public onlyAdmin {
        require(idChain[_wallet].cpf != 0, "This person is not registred!");
        admins[_wallet] = true;
    }

    function editNameMom(address momAddress, string memory _newName) public onlyAdmin {
        require(idChain[momAddress].cpf != 0, "This person is not registred!");
        if (idChain[childMomChain[momAddress]].cpf != 0) {
            idChain[childMomChain[momAddress]].nomeMae = _newName;
        }
    }

    function editNamedad(address dadAddress, string memory _newName) public onlyAdmin {
        require(idChain[dadAddress].cpf != 0, "This person is not registred!");
        if (idChain[childDadChain[dadAddress]].cpf != 0) {
            idChain[childDadChain[dadAddress]].nomeMae = _newName;
        }
    }

    function editName(address person, string memory _newName) public onlyAdmin {
        idChain[person].name = _newName;
    }

    function addChildMom(address momAddress, address childAddress) public onlyAdmin {
        childMomChain[momAddress] = childAddress;
    }

    function addChildDad(address dadAddress, address childAddress) public onlyAdmin {
        childDadChain[dadAddress] = childAddress;
    }

    function recoverWallet(Digital memory digital) public view onlyAdmin returns(address wallet) {
        return(digitalChain[digital.digital]);
    }

    function addPerson(address _wallet, Person memory person) public onlyAdmin {
        idChain[_wallet] = person;
    }
}
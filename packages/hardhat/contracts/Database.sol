// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Database {

    bool public updateTrigger;

    struct Person {
        string name;
        uint256 cpf;
        uint256 id;
        address mae;
        address pai;
        string dataNascimento;
        string naturalidade;
        string nacionalidade;
        string sexo;
        bool changed;
    }

    struct Digital {
        uint256 digital;
    }

    struct DocumentNascimento {
        uint256 matricula;
        string uf;
        string municipioNascimento;
        string municipioRegistro;
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

    mapping(uint256 => address) digitalChain;

    mapping(address => DocumentNascimento) documentNascimentoChain;


    function getPersonByWallet(address _wallet) public view onlyAdmin returns(Person memory person){
        require(idChain[_wallet].cpf != 0, "This person is not registred!");
        return idChain[_wallet];
    }

    function addAdmin(address _wallet) public onlyAdmin {
        require(idChain[_wallet].cpf != 0, "This person is not registred!");
        admins[_wallet] = true;
    }

    function editName(address _wallet, string memory _newName) public onlyAdmin {
        require(idChain[_wallet].cpf != 0, "This person is not registred!");
        idChain[_wallet].name = _newName;
        idChain[_wallet].changed = true;
    }

    function recoverWallet(Digital memory digital) public view onlyAdmin returns(address wallet) {
        return(digitalChain[digital.digital]);
    }

    function addPerson(address _wallet, Person memory person) public onlyAdmin {
        idChain[_wallet] = person;
    }

    function getPersonData() public view returns(Person memory) {
        return idChain[msg.sender];
    }

    function update() public {
        if(idChain[idChain[msg.sender].mae].changed == true || idChain[idChain[msg.sender].pai].changed == true) {
            updateTrigger = true;
        }
    }

    function reset() public {
        idChain[idChain[msg.sender].mae].changed = false;
        idChain[idChain[msg.sender].pai].changed = false;
    }
       
    function addDocumentNascimento(
        address wallet,
        uint256 matricula,
        string memory uf,
        string memory localNascimento,
        string memory localRegistro
    ) public onlyAdmin {
        documentNascimentoChain[wallet] = DocumentNascimento(
            matricula,
            uf,
            localNascimento,
            localRegistro);
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Database {
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
    }

    struct Horario {
        string hora;
        string minuto;  
    }

    struct Digital {
        uint256 digital;
    }

    struct Local {
        string complemento;
        string municipio;
        string uf;
    }

    struct Data {
        string dia;
        string mes;
        string ano;
    }

    struct DocumentNascimento {
        uint256 matricula;
        Local localNascimento;
        Local localRegistro;
        Horario horaNascimento;
        Data dataRegistro;
        string numeroDNV;
    }

    modifier onlyAdmin {
        require(admins[msg.sender] == true, "You are not an admin!");
        _;
    }

    constructor() {
        admins[msg.sender] = true;
    }
    
    mapping(address => bool) admins;

    mapping(address => Person) idChain;

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
       
    function addDocumentNascimento(
        address wallet,
        uint256 matricula,
        Local memory localNascimento,
        Local memory localRegistro,
        Horario memory horaNascimento,
        Data memory dataRegistro,
        string memory numeroDNV
    ) public onlyAdmin {
        documentNascimentoChain[wallet] = DocumentNascimento(
            matricula,
            localNascimento,
            localRegistro,
            horaNascimento,
            dataRegistro,
            numeroDNV);
    }
}
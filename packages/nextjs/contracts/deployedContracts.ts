/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  534351: {
    Database: {
      address: "0xBba1400EC4A30374fBb1A658A446b9cB7C770e25",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_wallet",
              type: "address",
            },
          ],
          name: "addAdmin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "wallet",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "matricula",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "complemento",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "municipio",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "uf",
                  type: "string",
                },
              ],
              internalType: "struct Database.Local",
              name: "localNascimento",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "complemento",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "municipio",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "uf",
                  type: "string",
                },
              ],
              internalType: "struct Database.Local",
              name: "localRegistro",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "hora",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "minuto",
                  type: "string",
                },
              ],
              internalType: "struct Database.Horario",
              name: "horaNascimento",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "dia",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "mes",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "ano",
                  type: "string",
                },
              ],
              internalType: "struct Database.Data",
              name: "dataRegistro",
              type: "tuple",
            },
            {
              internalType: "string",
              name: "numeroDNV",
              type: "string",
            },
          ],
          name: "addDocumentNascimento",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_wallet",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "cpf",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "mae",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "pai",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "dataNascimento",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "naturalidade",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "nacionalidade",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "sexo",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "changed",
                  type: "bool",
                },
              ],
              internalType: "struct Database.Person",
              name: "person",
              type: "tuple",
            },
          ],
          name: "addPerson",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "admins",
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
              name: "_wallet",
              type: "address",
            },
            {
              internalType: "string",
              name: "_newName",
              type: "string",
            },
          ],
          name: "editName",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_wallet",
              type: "address",
            },
          ],
          name: "getPersonByWallet",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "cpf",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "mae",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "pai",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "dataNascimento",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "naturalidade",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "nacionalidade",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "sexo",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "changed",
                  type: "bool",
                },
              ],
              internalType: "struct Database.Person",
              name: "person",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getPersonData",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "cpf",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "mae",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "pai",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "dataNascimento",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "naturalidade",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "nacionalidade",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "sexo",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "changed",
                  type: "bool",
                },
              ],
              internalType: "struct Database.Person",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "idChain",
          outputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "cpf",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "mae",
              type: "address",
            },
            {
              internalType: "address",
              name: "pai",
              type: "address",
            },
            {
              internalType: "string",
              name: "dataNascimento",
              type: "string",
            },
            {
              internalType: "string",
              name: "naturalidade",
              type: "string",
            },
            {
              internalType: "string",
              name: "nacionalidade",
              type: "string",
            },
            {
              internalType: "string",
              name: "sexo",
              type: "string",
            },
            {
              internalType: "bool",
              name: "changed",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "digital",
                  type: "uint256",
                },
              ],
              internalType: "struct Database.Digital",
              name: "digital",
              type: "tuple",
            },
          ],
          name: "recoverWallet",
          outputs: [
            {
              internalType: "address",
              name: "wallet",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "update",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;

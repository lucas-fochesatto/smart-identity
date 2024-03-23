// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

struct Person {
    string name;
    immutable uint256 cpf;
    immutable uint256 id;
    immutable uint256 cnh;
    immutable Person mae;
    immutable Person pai;
}

struct Digital {
    uint256 digital;
}
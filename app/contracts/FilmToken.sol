// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FilmToken is ERC20, Ownable {
    mapping(string => bool) private tokenizedFilms;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function mintTokens(address to, uint256 amount, string memory filmId) public onlyOwner {
        require(!tokenizedFilms[filmId], "Film already tokenized");
        _mint(to, amount);
        tokenizedFilms[filmId] = true;
    }

    function isFilmTokenized(string memory filmId) public view returns (bool) {
        return tokenizedFilms[filmId];
    }

    function transferTokens(address from, address to, uint256 amount) public {
        _transfer(from, to, amount);
    }
}

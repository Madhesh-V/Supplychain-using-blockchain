// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    using SafeMath for uint256;

    string public baseTokenURI;

    constructor(string memory _name, string memory _symbol, string memory _baseTokenURI) ERC721(_name, _symbol) {
        baseTokenURI = _baseTokenURI;
    }

    function setBaseURI(string memory _newBaseTokenURI) public onlyOwner {
        baseTokenURI = _newBaseTokenURI;
    }

    function mintNFT(address to, string memory tokenURI) public onlyOwner {
        uint256 tokenId = totalSupply().add(1);
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}

function mintNFT(address to, string memory tokenURI) public onlyOwner {
    uint256 tokenId = totalSupply().add(1);
    _mint(to, tokenId);
    _setTokenURI(tokenId, tokenURI);
}

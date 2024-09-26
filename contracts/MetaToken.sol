// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract MetaPixelNFT is ERC721A, Ownable {
    mapping (uint => string) private tokenUrls;
    mapping (uint => string) private prompts;

    constructor() ERC721A("Meta Pixels", "MPX") Ownable(msg.sender) {}
    
    function mintNft(string[] memory _urls, string[] memory _prompts) public onlyOwner{
        require(_urls.length==_prompts.length, "Invalid metadata");
        uint startTokenId = _nextTokenId();
        uint tokensLength = _urls.length;

        _safeMint(owner(), tokensLength);

        for(uint i = 0;i<tokensLength;i++){
            tokenUrls[startTokenId+i] = _urls[i];
            prompts[startTokenId+i] = _prompts[i];
        }
    }
    function promptDescription(uint _id) public view returns(string memory){
        require(_exists(_id), "Token doesn't exist");
        return prompts[_id];
    }
    function urlDescription(uint _id) public view returns(string memory){
        require(_exists(_id), "Token doesn't exist");
        return tokenUrls[_id];
    }

}
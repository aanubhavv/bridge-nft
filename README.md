# Bridging Tokens with fxPortal - MetaPixel

MetaPixel is an ERC721A compliant NFT contract that allows the owner to mint NFTs with specific URLs and prompts. The contract is built using Solidity and leverages the OpenZeppelin library for ownership management. Additionally, this project includes scripts to deploy and interact with the contract using Hardhat.

## Description
### ERC721A
MetaPixel is built using the ERC721A standard, which is a more gas-efficient implementation of the ERC721 standard. ERC721A allows for batch minting of multiple tokens in a single transaction, significantly reducing the gas cost per token when compared to the traditional ERC721 standard. This efficiency makes ERC721A an ideal choice for projects looking to mint large quantities of NFTs.

### Bridging from Sepolia to Amoy
The MetaPixel project includes functionality to bridge NFTs from the Sepolia test network to the Amoy network. This process involves:

- Approval for All: Setting approval for the bridging contract to manage the NFTs on behalf of the user.
- Depositing Tokens: Depositing NFTs into the bridging contract, which then handles the transfer to the destination network.
The bridging process ensures that NFTs can be transferred between networks securely and efficiently, allowing for greater flexibility and reach of the NFT project.


# Contract Overview
The MetaPixel smart contract is an ERC721A compliant contract that allows for efficient minting and management of NFTs. Below is a brief overview of the key components and functions of the contract:
## Constructor
```solidity
constructor() ERC721A("MetaPixel", "MPX") Ownable(msg.sender) {}
```
The constructor initializes the contract with the name MetaPixel and the symbol MPX, and sets the contract deployer as the owner.
## Functions
- ### mintNft
  ```solidity
  function mintNft(string[] memory _urls, string[] memory _prompts) public onlyOwner
  ```
  This function allows the owner to mint new NFTs. It accepts two arrays: _urls and _prompts, which should have the same length. Each new NFT is assigned a URL and a prompt from these arrays.
- ### promptDescription
  ```solidity
  function promptDescription(uint _id) public view returns(string memory)
  ```
  This function returns the prompt associated with a specific token ID. It ensures the token exists before returning the prompt.
- ### urlDescription
  ```solidity
  function urlDescription(uint _id) public view returns(string memory)
  ```
  This function returns the url associated with a specific token ID. It ensures the token exists before returning the prompt.
  
## Getting Started
### Prerequisites
- Node.js
- npm or yarn or bun
- Hardhat
  
### Installation
1. Clone the repository:
  ```shell
  git clone https://github.com/aanubhavv/bridge-nft.git
  cd poly-1
  ```
2. Install dependencies:
```shell
npm install
```

### Executing program

4. Compile the contract:
```shell
npx hardhat compile
```
5. Deploy the contract:
```shell
npx hardhat run scripts/deploy.js --network sepolia
```
6. Minting NFTs:
```shell
npx hardhat run scripts/mint.js --network sepolia
```
7. Approving Deposit:
```shell
npx hardhat run scripts/approveDeposit.js --network sepolia
```
8. Getting balance:
```shell
npx hardhat run scripts/getBalance.js --network amoy
```


## Help
If you need assistance with the MetaPixel project or want to explore available commands, you can use the following shell command to access Hardhat's help documentation:
```shell
npx hardhat help
```
This command provides a list of available tasks and commands in Hardhat, along with descriptions and usage instructions. It is useful for understanding how to deploy, test, and interact with your smart contracts within the Hardhat environment.

## Authors
Anubhav Garg

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

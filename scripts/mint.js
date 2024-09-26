// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("D:/Programming/Solidity/poly-proof/poly-adv-1/artifacts/contracts/MetaToken.sol/MetaPixelNFT.json");
require("dotenv").config();

const tokenAddress = "0x96acC81EEaddae5440DDC2A4AF73FFf3316Aaf43"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xBEef8a0940FFE307C165A9977E93CaD360dD3E4e"; // place your public address for your wallet here

async function main() {
  const imageUrls = [
    "ipfs://QmbzwpZSbr7XVzArZ5vZ59xPmXbRyfk2jn2FzZvFB4LWGu",
    "ipfs://QmSUqBDCoQE6eowmY8ryiDDd1bLqPEksrJm2yDbuc57vms",
    "ipfs://QmcmRemGxacCFXXBJerhfRg5QeJycd7tjoVQxheeWjsDPd",
    "ipfs://QmcEZhF9ecYx5W8dLWRDWMinbnKCZwX1MwFee26Ghgu2pD",
    "ipfs://Qmf4C4jBWz4GzzGC48ye2sVvCjTVAgK8q5AZTjvRN9UVhb",
  ];

  const prompts = [
    "watercolour painting of a valley with house next to a river",
    "portrait of a wizard with a long beard",
    "a dragon sitting on castle wall",
    "bowl of fruit sitting on a table",
    "hawk",
  ];

  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

  const tx = await token.mintNft(imageUrls, prompts);
  await tx.wait();

  console.log(`You now have minted ${imageUrls.length} NFTs`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

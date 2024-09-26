// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaPixelNFT.json");
const NUMBER_OF_TOKENS = 5;
const tokenAddress = "0x96acC81EEaddae5440DDC2A4AF73FFf3316Aaf43"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xBEef8a0940FFE307C165A9977E93CaD360dD3E4e"; // place your public address for your wallet here

async function main() {
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    fxERC721RootTunnel
  );

  const approveTx = await tokenContract.setApprovalForAll(
    fxERC721RootTunnel,
    true
  );
  await approveTx.wait();

  console.log("Approval confirmed");

  for (let i = 0; i < NUMBER_OF_TOKENS; i++) {
    const depositTx = await fxContract.deposit(
      tokenAddress,
      walletAddress,
      i,
      "0x6556"
    );
    await depositTx.wait();
    console.log(`Depositing ${i+1}: Successful`);
  }

  console.log("Tokens deposited");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

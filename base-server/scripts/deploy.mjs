import hardhat from 'hardhat';
const { ethers } = hardhat;

async function main() {
  const supplyChain = await ethers.deployContract('SupplyChain');

  await supplyChain.waitForDeployment();

  // console.log(supplyChain)

  console.log('Contract Deployed at ' + supplyChain.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xadd4645072CA3D4147BBe12f0164F3D7b72cFc1b
import hre from 'hardhat';

async function main() {
  const NameSystem = await hre.ethers.getContractFactory('NameSystem');
  console.log('Deploying NameSystem ERC721 token...');
  const token = await NameSystem.deploy('NameSystem', 'Name');

  await token.deployed();
  console.log('NameSystem deployed to:', token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

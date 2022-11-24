import hre from 'hardhat';

async function main() {
  const NameSystem = await hre.ethers.getContractFactory('NameSystem');
  console.log('Deploying NameSystem ERC721 token...');
  const token = await NameSystem.deploy(
    'NameSystem',
    'Name',
    '0x7e4d90b51E144cd848E26e2ed2E9E1A62ab7b2e3'
  );

  await token.deployed();
  console.log('NameSystem deployed to:', token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

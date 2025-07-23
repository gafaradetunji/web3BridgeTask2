
import hre from "hardhat";

async function deployContract() {
  const Lock = await hre.ethers.getContractFactory("Storage");
  const lock = await Lock.deploy();
  await lock.waitForDeployment();

  console.log(lock.target)
}

deployContract();

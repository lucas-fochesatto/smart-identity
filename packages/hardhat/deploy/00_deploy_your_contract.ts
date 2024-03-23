import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Database", {
    from: deployer,
    log: true,
    autoMine: true
  })

  const dbContract = await hre.ethers.getContract<Contract>("Database", deployer);
  // console.log("👋 Initial greeting:", await yourContract.greeting());
  await dbContract.addPerson("0xa9760110671d7a5a37A72F684D7D1d92F2dE84dA", "Lucas", 12132113);
  //const person = await dbContract.getPersonByWallet(0xa9760110671d7a5a37A72F684D7D1d92F2dE84dA)
  //console.log(person.name);
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["Database"];

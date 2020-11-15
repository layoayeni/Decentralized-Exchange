let USD = artifacts.require("USD.sol");

module.exports = function (deployer) {
  deployer.deploy(USD);
};

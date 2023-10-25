const MyNFT = artifacts.require("MyNFT");

module.exports = function (deployer) {
  deployer.deploy(MyNFT, "MyNFT", "MFT", "https://your-base-uri.com/api/tokens/");
};

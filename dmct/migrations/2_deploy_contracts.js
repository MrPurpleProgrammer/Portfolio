var Models = artifacts.require("../contracts/Models.sol");
var DMCT = artifacts.require("../contracts/DMCT/DMCT.sol");
var DMCTServices = artifacts.require("../contracts/DMCT/DMCTServices.sol");
var Artisan = artifacts.require("../contracts/Artisan.sol");
var IPFSEngine = artifacts.require("../contracts/IPFSEngine.sol");

//var NFCSearch = artifacts.require("./contracts/NFCSearch.sol");


module.exports = function(deployer) {

    // Deploy the Models contract
    /*deployer.deploy(Models)
        // Wait until the models contract is deployed
        .then(() => Models.deployed())
        // Deploy the Security contract, while passing the address of the DMCT_Models
        // and so on..
        .then(() => deployer.deploy(Artisan, Models.address))
        .then(() => deployer.deploy(DMCT, Artisan.address))
        .then(() => deployer.deploy(DMCT_Services, DMCT.address));
    */
    deployer.deploy(IPFSEngine);
    deployer.deploy(Models);
    deployer.deploy(DMCT);
    deployer.deploy(DMCTServices);
    deployer.deploy(Artisan);
}
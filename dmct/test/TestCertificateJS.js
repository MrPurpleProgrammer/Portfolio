
const DMCTServices = artifacts.require("../contracts/DMCT/DMCT_Services.sol");
const DMCT = artifacts.require("../contracts/DMCT/DMCT.sol");
const multihashing = require('multihashing-async');
const CID = require('cids');

// contract("DMCTServices", accounts => {
//     it("get the size of the contract", function () {
//         return DMCTServices.deployed().then(function (instance) {
//             var bytecode = instance.constructor._json.bytecode;
//             var deployed = instance.constructor._json.deployedBytecode;
//             var sizeOfB = bytecode.length / 2;
//             var sizeOfD = deployed.length / 2;
//             console.log("size of bytecode in bytes = ", sizeOfB);
//             console.log("size of deployed in bytes = ", sizeOfD);
//             console.log("initialisation and constructor code in bytes = ", sizeOfB - sizeOfD);
//         });
//     });
//     // it("Verify the first account is the contract owner", async () => {
//     //     let instance = await DMCT.deployed();
//     //     let owner = await instance.owner();
//     //     assert.equal(owner, creator); 
//     // });
//     // it("It should create a Certificate, a License, and then transfer that certificate.", async () => {
//     //     let instance = await NFCServices.deployed();
//     //     await instance.createCertificate("bleh", "world1", ".com", {from: "0xaBA24323A02Fdab404ea2C6f5B8a486CBB8003E1"});
//     //     await instance.checkTokenStatus(web3.utils.toBN('212502406447782057571836693670462'));
//     //     await instance.createLicense(web3.utils.toBN('212502406447782057571836693670462'), "0xaBA24323A02Fdab404ea2C6f5B8a486CBB8003E1", {from: "0xaBA24323A02Fdab404ea2C6f5B8a486CBB8003E1"});
//     //     await instance.createLicense(web3.utils.toBN('212502406447782057571836693670462'), "0xAa34Be56433888FAE9818c3Ac5E86EB0fdfb71F0", {from: "0xaBA24323A02Fdab404ea2C6f5B8a486CBB8003E1"});
//     //     await instance.returnLicenseOwnerArray(web3.utils.toBN('212502406447782057571836693670462'));
//     //     await instance.transferCertificte("0xAa34Be56433888FAE9818c3Ac5E86EB0fdfb71F0", web3.utils.toBN("212502406447782057571836693670462"), {from: "0xaBA24323A02Fdab404ea2C6f5B8a486CBB8003E1"});
//     //     let assertion = await instance.checkOwnerOfToken(web3.utils.toBN('212502406447782057571836693670462'));
//     //     assert.equal(assertion, "0xAa34Be56433888FAE9818c3Ac5E86EB0fdfb71F0");
//     // });

//     // it("It should transfer a certificate, create a new License and destroy that License", async () => {
//     //     let instance = await NFCServices.deployed();
//     //     await instance.transferCertificte("0x46B35908Ea794886ce2fDCAD5b6B82D060F5eDFe", web3.utils.toBN("20050766946163426"), {from: "0xAa34Be56433888FAE9818c3Ac5E86EB0fdfb71F0"});
//     //     await instance.createLicense(web3.utils.toBN('212502406447782057571836693670462'), "0x37213b67bF81E7d27C7cc8f281182EA9f123Cb4C", {from: "0x46B35908Ea794886ce2fDCAD5b6B82D060F5eDFe"});
//     //     await instance.createLicense(web3.utils.toBN('212502406447782057571836693670462'), "0xd2f435012CF5d2B83e0Db1C349209910Dd0c334B", {from: "0x46B35908Ea794886ce2fDCAD5b6B82D060F5eDFe"});
//     //     await instance.destroyToken(web3.utils.toBN('35849217489622179'), {from: '0x46B35908Ea794886ce2fDCAD5b6B82D060F5eDFe'});
//     //     await instance.returnLicenseOwnerArray(web3.utils.toBN('20050766946163426')).then(function(res){assert.deepEqual(res[0] ,'0xaBA24323A02Fdab404ea2C6f5B8a486CBB8003E1');});
//     // });

//     // it("It should create a User and check changes in the portfolio", async () => {
//     //     let instance = await NFCServices.deployed();
//     //     await instance.createUser("PurpleSamosa", {from:"0x94ce049247b7f38c784b5435448FcaFCF34b5705"});
//     //     await instance.createCertificate("GenesisCertificate", "HelloWorld", "www.purpleSamosa.com", {from: "0x94ce049247b7f38c784b5435448FcaFCF34b5705"});
//     //     await instance.returnUserByAddress("0x94ce049247b7f38c784b5435448FcaFCF34b5705").then(function(res){let userName = res[0]; assert.equal(userName, "PurpleSamosa");});
//     // })
// });
contract("DMCT", accounts => {
    let creator = "0x0a9C004a150445F41D3ed0fB205Bb2c20d8B913B";
    let licenseTransferee1 = "0x27FeC81460477D3EB8c6D8333e773fc14873CEDA";
    let licenseTransferee2 = "0xba67fDD3e38a9444FA3eb56Fc9047f768259d521";
    let licenseTransferee3 = "0x3F726520Ddc54875AafD0b032ba2Ce9B09BF1ccC";
    let assetHash = Buffer.from('Hello DMCT', 'hex');
    const url = "388CD7A0AC2B02";
    //Convert Id into multihash data bytes
    let ipfsCID = new CID('bafybeidsnx4fyxavnmonff7fopzps5lwdbmhcmo7fchiebgddodctcetzy');
    let args = {
        hashFunction: ipfsCID.buffer.slice(0,4),
        hash: ipfsCID.multihash.slice(4),
      }
    console.log(args, ipfsCID.multibaseName);
    // it("get the size of the contract", function () {
    //     return DMCT.deployed().then(function (instance) {
    //         var bytecode = instance.constructor._json.bytecode;
    //         var deployed = instance.constructor._json.deployedBytecode;
    //         var sizeOfB = bytecode.length / 2;
    //         var sizeOfD = deployed.length / 2;
    //         console.log("size of bytecode in bytes = ", sizeOfB);
    //         console.log("size of deployed in bytes = ", sizeOfD);
    //         console.log("initialisation and constructor code in bytes = ", sizeOfB - sizeOfD);
    //     });
    // });
    it("It should create a certificate, and then destroy that certificate", async () => {
        let instance = await DMCT.deployed();
        await instance.createCertificate("Hello World", assetHash, args.hash, args.hashFunction);
        // let assetIDS1 = await instance.returnAssetIDS();
        // await instance.destroyToken(web3.utils.toBN('253927849376658573003107002963798'), {from: creator});
    });
});
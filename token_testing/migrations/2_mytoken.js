const artefacto = artifacts.require("MyToken");

module.exports = function(deployer) {
    deployer.deploy(artefacto, "0xCcfE43CAfEd4c12a8163acafC0A77e20710602a3");
}
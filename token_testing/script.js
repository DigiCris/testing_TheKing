const contrato = artifacts.require("MyToken");

module.exports = async function(deployer) {
    const instancia = await contrato.deployed();
    const name = await instancia.name();
    const symbol = await instancia.symbol();
    console.log(name+"=>"+symbol);
}
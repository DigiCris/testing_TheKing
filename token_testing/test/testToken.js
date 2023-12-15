const expect = require('chai').expect;
const erc20 = artifacts.require("MyToken");

contract("MyToken testing", accounts => {

    [owner, account2, account3, Hacker, account4] = accounts;
    var erc20_instancia;

    before(async function() {
        erc20_instancia = await erc20.new(owner);
    });

    context("construcción del contrato", async() => {

        it("1 - Prueba de Nombre", async() => {
            const _name = await erc20_instancia.name();
            expect(_name).to.equal("MyToken");
        });

        it("2 - Ownership", async() => {
            const _owner = await erc20_instancia.owner();
            expect(_owner).to.equal("0xCcfE43CAfEd4c12a8163acafC0A77e20710602a3");
        });

        it("3 - Transfer", async() => {
            const _balance1 = await erc20_instancia.balanceOf(account2);
            await erc20_instancia.transfer(account2,100);
            const _balance2 = await erc20_instancia.balanceOf(account2);
            const _baltot = _balance2 - _balance1;
            console.log(_balance2 + " - " + _balance1 + " = " + _baltot);
            expect(_baltot).to.equal(100);
        });

    });


});
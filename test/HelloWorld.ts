import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";


// 1. setup 
describe("Hello world", () => {
    it("should say hi", async () => {
        // 2. deploy contract
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy();
        await hello.deployed();

        // 3. call functions to test
        expect(await hello.hello()).to.equal("Hello, World!");
    });
});

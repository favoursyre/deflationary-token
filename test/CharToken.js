const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CharToken", () => {
  beforeEach(async () => {
    [owner, signer2] = await ethers.getSigners();
    CharToken = await ethers.getContractFactory("CharToken", owner);
    _charToken = await CharToken.deploy();
  });

  describe("transfer", () => {
    it("transfers tokens, reduces supply and wallet balances", async () => {
      let ownerBalance;
      let signer2Balance;
      let totalSupply;

      totalSupply = await _charToken.totalSupply();
      ownerBalance = await _charToken.balanceOf(owner.address);
      expect(totalSupply).to.equal(ethers.utils.parseEther("10"));
      expect(ownerBalance).to.equal(ethers.utils.parseEther("10"));

      await _charToken
        .connect(owner)
        .transfer(signer2.address, ethers.utils.parseEther("5"));

      totalSupply = await _charToken.totalSupply();
      ownerBalance = await _charToken.balanceOf(owner.address);
      signer2Balance = await _charToken.balanceOf(signer2.address);
      expect(totalSupply).to.equal(
        ethers.utils.parseEther(String(10 - 5 * 0.5))
      );
      expect(ownerBalance).to.equal(ethers.utils.parseEther("5"));
      expect(signer2Balance).to.equal(ethers.utils.parseEther("5"));
    });
  });
});

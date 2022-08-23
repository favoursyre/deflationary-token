//I want to create a deflationary token

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20Mod.sol";

//Commencing with the smart contract -->
contract CharToken is ERC20Mod {
    constructor() ERC20Mod("CharToken", "CTR") {
        _mint(msg.sender, 10 * 10**18);
    }
}

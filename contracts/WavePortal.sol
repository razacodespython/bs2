// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import '@thirdweb-dev/contracts/ThirdwebContract.sol';

contract WavePortal is ThirdwebContract {
    uint256 totalWaves;

    constructor() {
    }

    function wave() public {
        totalWaves += 1;
    }

    function getTotalWaves() public view returns (uint256) {
        return totalWaves;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity >0.7.0 <0.9.0;

/*
1) una persona A manda 1 eth... the king
2) 0,5 ethers ... no pasa nada, y pierde los ethers
se juntan los ethers en el contrato
3) 1.1 ether... the King (persona A se le devuelve 1.1 eth)
*/

contract TheKingContract {

    address payable public theKing;
    uint256 valorKing;

    constructor() payable  {
        theKing = payable(msg.sender);
    }

    function play() external payable {
        if(msg.value>valorKing) {
            theKing.transfer(msg.value);
            theKing = payable(msg.sender);
            valorKing = msg.value;
        }
    }

}

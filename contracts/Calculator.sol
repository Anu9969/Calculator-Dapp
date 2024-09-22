// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.30;

contract Calculator {

    uint public result;

    event Success(string msg);

    function addNum(uint num1, uint num2) public pure returns (uint) {
        return num1 + num2;
    }

    function subtractNum(uint num1, uint num2) public pure returns (uint) {
        return num1 - num2;
    }

    function mulNum(uint num1, uint num2) public pure returns (uint) {
        return num1 * num2;
    }

    function divNum(uint num1, uint num2) public pure returns (uint) {
        require(num2 > 0, "Num cannot be zero or negative");
        return num1 / num2;
    }

    // State-changing function to store the result and emit success event
    function storeResult(uint value) public {
        result = value;
        emit Success("Operation Successful");
    }
}

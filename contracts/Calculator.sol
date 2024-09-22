// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Calculator{
    function addNum(uint num1 , uint num2) public returns (uint){
        return num1+num2;
    }

        function subtractNum(uint num1 , uint num2) public returns (uint){
        return num1-num2;
    }
}
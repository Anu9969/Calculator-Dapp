// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Calculator{

    uint public result;

    event success(string msg);
    function addNum(uint num1 , uint num2) public pure returns (uint){
        return num1+num2;
    }

    function subtractNum(uint num1 , uint num2) public pure returns (uint){
        return num1-num2;
    }

    function MulNum(uint num1 , uint num2) public {
        return num1*num2;
        emit success("Multiplication Successful");
    }

    function DivNum(uint num1 , uint num2) public pure returns (uint){
        require(num2>0 , "Num cannot be zero or negative");
        require(num1>num2 , "Num1 should be greater than Num2");
        return num1/num2;
    }
}
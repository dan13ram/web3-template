// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract Hello {
    string public message;

    function set(string calldata _message) public {
        message = _message;
    }
}

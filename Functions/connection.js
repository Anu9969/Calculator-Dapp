// //connection for web3

// var Web3 = require('web3');
// const providers = new Web3.providers.HttpProvider("http://localhost:8545");
// var web3 = new Web3(providers);

// async function connection(){
//     account = await web3.eth.getAccounts();
//     console.log("Connected to account: ", account[0]);
// }
const { Web3 } = require('web3');
const Calculator = require('../build/contracts/Calculator.json');

// Create Web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function connection() {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log("Connected to account: ", accounts[0]);
        return accounts[0];
    } catch (error) {
        console.error("Error connecting to the account:", error);
        throw error;
    }
}

// Function to create contract instance
async function createContractInstance() {
    try {
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const { address } = Calculator.networks[networkId];
        
        const instance = new web3.eth.Contract(
            Calculator.abi,
            address
        );
        console.log("Contract Address:", address);
        return { instance, accounts };
    } catch (error) {
        console.error("Error creating contract instance:", error);
        throw error;
    }
}

// Test the connection and contract instance creation
async function testSetup() {
    try {
        const account = await connection();
        console.log("Successfully connected to account:", account);
        
        const { instance, accounts } = await createContractInstance();
        console.log("Successfully created contract instance");
        console.log("Contract methods:", Object.keys(instance.methods));
    } catch (error) {
        console.error("Setup failed:", error);
    }
}

testSetup();

module.exports = { web3, connection, createContractInstance };
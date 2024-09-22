// //connection for web3

// var Web3 = require('web3');
// const providers = new Web3.providers.HttpProvider("http://localhost:8545");
// var web3 = new Web3(providers);

// async function connection(){
//     account = await web3.eth.getAccounts();
//     console.log("Connected to account: ", account[0]);
// }

const { Web3 } = require('web3');

// Create Web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const Calculator = require('../build/contracts/Calculator.json');




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

// Test the connection
connection()
    .then((account) => {
        console.log("Successfully connected to account:", account);
    })
    .catch((error) => {
        console.error("Failed to connect:", error);
    });


    //fuction to create contract instance
async function createContractInstance(){
    var accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const {address} = Calculator.networks[networkId];
    
    var instance = await new web3.eth.Contract(
        Calculator.abi,
        address
    )
    console.log("Address:" , address);
    return {instance, accounts};
}


module.exports = { web3, connection };

createContractInstance();
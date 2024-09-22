//connection for web3

var Web3 = require('web3');
const providers = new Web3.providers.HttpProvider("http://localhost:8545");
var web3 = new Web3(providers);

async function connection(){
    account = await web3.eth.getAccounts();
    console.log("Connected to account: ", account[0]);
}

connection();
// const { createContractInstance } = require('./connection');

// async function addition(num1, num2) {
//     try {
//         const { instance, accounts } = await createContractInstance();
        
//         // Use .call() for read-only operations
//         const result = await instance.methods.addNum(num1, num2)
//         .call({ from: accounts[0] });
        
//         console.log("Result of addition:", result);
//         return result;
//     } catch (error) {
//         console.error("Error performing addition:", error);
//         throw error;
//     }
// }

// Test the addition function
// addition(10, 20)
//     .then(result => console.log("Test addition result:", result))
//     .catch(error => console.error("Test addition failed:", error));

// module.exports = { addition };




const { createContractInstance } = require('./connection');

async function addition(num1, num2) {
    try {
        const { instance, accounts } = await createContractInstance();
        
        // Use .call() for read-only operations
        const result = await instance.methods.addNum(num1, num2)
        .call();
        
        console.log("Result of addition:", result);
        return result;
    } catch (error) {
        console.error("Error performing addition:", error);
        throw error;
    }
}

// Test the addition function
addition(10, 20)
    .then(result => console.log("Test addition result:", result))
    .catch(error => console.error("Test addition failed:", error));

module.exports = { addition };
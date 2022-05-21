// scripts/index.js

module.exports = async function main (callback) {
    try {
        // Our code will go here 
        // Ex1: calling script from truffle to show accounts
        // const accounts = await web3.eth.getAccounts();
        // console.log(accounts);

        // Ex2: calling a contract instance of Box.
        const Box = artifacts.require('Box');
        const box = await Box.deployed();

        const value = await box.retrieve();
        console.log('Box value is', value.toString());

        // Send a txn to store() a new value in Box
        await box.store(42);

        // Call the retrieve() function of the deployed Box contract
        const value1 = await box.retrieve();
        console.log('Box value is', value1.toString());
        

        callback(0);
    } catch (error) {
        console.error(error);
        callback(1);
    }
};
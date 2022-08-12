import abiJSON from "./Web3RSVP.json";
import {ethers} from ethers;


function connectContract() {

    const contractAddress = "0x9A52e8890538ed59827c24be6Ff766C946013105";
    const contractABI = abiJSON.abi;
    let rsvpContract;

    try{
        const {ethereum} = window;

        if(ethereum){
            //check for eth object in the window
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigners();
             // instantiating new connection to the contract
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer);
        } else {
            console.log("Ethereum Object doesn't exist");
        }
    } catch(err){
        console.log("Error", err);
    }
    return rsvpContract;
}

export default connectContract;
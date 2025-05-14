import { ethers } from 'ethers'
//mainnet https://blockchain.googleapis.com/v1/projects/named-berm-448008-b9/locations/asia-east1/endpoints/ethereum-mainnet/rpc?key=AIzaSyB7ijZAkyebERrNT_P0uE_JY5wympSQbPQ
const testnetProvider = new ethers.JsonRpcProvider('https://blockchain.googleapis.com/v1/projects/named-berm-448008-b9/locations/asia-east1/endpoints/ethereum-sepolia/rpc?key=AIzaSyB7ijZAkyebERrNT_P0uE_JY5wympSQbPQ')
export default testnetProvider
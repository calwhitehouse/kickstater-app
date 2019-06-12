import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//in browser and metamask is running
	web3 = new Web3(window.web3.currentProvider);
} else {
	//on server or not running metamask
	const provider = new Web3.providers.HttpProvider (
		'https://rinkeby.infura.io/e3NPf8zKbxJZDYRwvLvL'
	);
	web3 = new Web3(provider);
}

export default web3;

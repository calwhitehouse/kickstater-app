import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
		JSON.parse(CampaignFactory.interface),
		'0x35B9862d7eCccF9dCbE468b87DD40F05fF667449'
);

export default instance;

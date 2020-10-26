 
const { ApiPromise, WsProvider } = require('@polkadot/api');

const main = async () => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    // Retrieve the latest header
    const lastHeader = await api.rpc.chain.getHeader();
    const number = lastHeader.number.toString();
    const hash = lastHeader.hash.toString();
    const parentHash = lastHeader.parentHash.toString();
    const stateRoot = lastHeader.stateRoot.toString();
    const extrinsicsRoot = lastHeader.extrinsicsRoot.toString();
    console.log(` Latest block:${number} \n Hash: ${hash} \n Parent hash: ${parentHash} \n Parent hash: ${stateRoot} \n Extrinsic root: ${extrinsicsRoot}`);
}

main().catch(err => {
    console.log(err)
}).finally(() => process.exit());

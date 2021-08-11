import BlockChain from './blockchain';

let myCoin = new BlockChain('First block! YAY!', '420');

myCoin.addBlock('One more block');
myCoin.addBlock('One more block');
myCoin.addBlock('One more block');
myCoin.addBlock('One more block');
myCoin.addBlock('One more block');

/* Debug */
console.log('\nBlocks mined array:\n' + JSON.stringify(myCoin.chain, null, 2));
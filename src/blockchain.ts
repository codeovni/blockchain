import Block from './block';

/**
 *  Blockchain class
 *
 * @export
 * @class BlockChain
 */
export default class BlockChain {

    chain: Block[];
    difficulty: string;

    constructor(genesis: any, difficulty = '00') {
        this.chain = [this.createFirstBlock(genesis)]; 
        this.difficulty = difficulty;
    }

    /**
     * Create first block
     *
     * @param {*} genesis
     * @return {*} 
     * @memberof BlockChain
     */
    createFirstBlock(genesis: any) {
        return new Block(0,genesis);
    }

    /**
     * Get last block mined
     *
     * @return {*} 
     * @memberof BlockChain
     */
    getLastBlock() {
        return this.chain[this.chain.length-1];
    }

    /**
     * Add new block
     *
     * @param {*} data
     * @memberof BlockChain
     */
    addBlock(data: any) {
        let prevBlock = this.getLastBlock();
        let block = new Block(prevBlock.index+1, data, prevBlock.hash);
        block.mine(this.difficulty);
        console.log('Mined! > ' + block.hash + ' with nonce '+block.nonce);
        this.chain.push(block);
    }
    
    /**
     * Check if block is invalid
     *
     * @return {*} 
     * @memberof BlockChain
     */
    isValid() {
        for(let i=1; i < this.chain.length; i++) {
            let prevBlock = this.chain[i-1];
            let currBlock = this.chain[i];
            if(currBlock.previousHash != prevBlock.hash) return false;
            if(currBlock.createHash() != currBlock.hash) return false;
        }
        return true;
    }

}
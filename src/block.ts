import sha256 from 'crypto-js/sha256';

/**
 * Block class
 *
 * @export
 * @class Block
 */
export default class Block {

    index: number;
    data: any;
    date: Date;
    previousHash: string;
    hash: string;
    nonce: number;
    
    constructor(index: number, data: any, previousHash = '') {
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
        this.nonce = 0;
    }

    /**
     * Create hash of block
     *
     * @return {string} 
     * @memberof Block
     */
    createHash(): string {
        return sha256(`${this.index}` + this.date + this.data + this.previousHash + this.nonce).toString();
    }

    /**
     * Mine new block
     *
     * @param {*} difficulty
     * @memberof Block
     */
    mine(difficulty: any) {
        while(!this.hash.startsWith(difficulty)) {
            this.nonce++;
            this.hash = this.createHash();
        }
    }
    
}
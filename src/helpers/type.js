export const chainIdToName = {
    1: "Ethereim",
    5: "Goerli",
    137: "Polygon"
}

export const nameToChainId = {
    "ethereim": 1,
    "goerli": 5,
    "polygon": 13
}

export class CollectionInfo {
    constructor(name, contract, blockchain, logoImage, futuredImage, bannerImage, desc) {
        this.name = name;
        this.contract = contract;
        this.blockchain = blockchain;
        this.logoImage = logoImage;
        this.futuredImage = futuredImage;
        this.bannerImage = bannerImage;
        this.desc = desc;
    }
    // EXTRA DATA
    // createdDate
    // creator - deployer

}

export class NFT {
    constructor(name, symbol, id) {
        this.name = name;
        this.symbol = symbol;
        this.id = id;
    }
}
export default interface ISavePurchases {
    save: (purchases: Array<ISavePurchases.Params>) => Promise<void>    
}

namespace ISavePurchases {
    export type Params = {
        id: string;
        date: Date;
        value: number
    }
}
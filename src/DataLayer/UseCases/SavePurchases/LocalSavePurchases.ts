import ICacheStore from "@/DataLayer/Protocols/Cache";

class LocalSavePurchases {
    constructor(
        private readonly cacheStore: ICacheStore
    ) { }

    async save(): Promise<void> {
        this.cacheStore.delete('purchases');
    }
}

export default LocalSavePurchases;